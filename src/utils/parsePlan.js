// Pulls the key facts out of the AI's Markdown travel plan so the UI can show
// a compact card instead of the full essay. The AI's wording varies, so every
// field is optional and the card falls back to `summary` if nothing matches.

const stripMd = (s = '') =>
  s.replace(/\*\*|__|\*|`/g, '').replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim()

// Bold phrases like **Sensō-ji** are usually place or dish names
const boldPhrases = (text) =>
  [...text.matchAll(/\*\*([^*]+?)\*\*/g)].map((m) => m[1].replace(/\s*\([^)]*\)/g, '').trim())

const isPlaceLike = (s) =>
  s.length > 1 &&
  s.length <= 40 &&
  !/[$€£₩\d]/.test(s) &&
  !/:$/.test(s) &&
  !/^(assumptions?|note|tip|day|budget|total|dinner|lunch|breakfast)\b/i.test(s)

const unique = (arr) => [...new Set(arr.map((s) => s.replace(/[.,;:]$/, '')))]

// Split the plan into sections keyed by their heading line
const splitSections = (lines) => {
  const sections = []
  let current = { heading: '', lines: [] }
  for (const line of lines) {
    if (/^#{1,4}\s/.test(line)) {
      sections.push(current)
      current = { heading: stripMd(line), lines: [] }
    } else {
      current.lines.push(line)
    }
  }
  sections.push(current)
  return sections
}

const DAY_RE = /^(?:#{1,4}\s*)?(?:\*\*)?\s*day\s*(\d+)\s*(?:[—–:\-|]\s*(.*?))?\s*(?:\*\*)?\s*$/i

const parseDays = (lines) => {
  const days = []
  let current = null
  for (const line of lines) {
    const m = line.trim().match(DAY_RE)
    if (m) {
      current = { day: Number(m[1]), title: stripMd(m[2] || ''), body: [] }
      days.push(current)
      continue
    }
    // A new non-day heading ends the itinerary
    if (current && /^#{1,3}\s/.test(line)) current = null
    if (current) current.body.push(line)
  }

  return days.map((d) => {
    const body = d.body.join('\n')
    return {
      day: d.day,
      title: d.title,
      places: unique(boldPhrases(body).filter(isPlaceLike)).slice(0, 3),
    }
  })
}

const MONEY_RE = /([$€£₩]\s?[\d,]+(?:\.\d+)?|[\d,]+(?:\.\d+)?\s?(?:USD|KRW|EUR|GBP|won))/i

const shortLabel = (label) => {
  const clean = stripMd(label).split(/\s[—–-]\s|\(|,/)[0].trim()
  return clean.length > 18 ? clean.slice(0, 16) + '…' : clean
}

// How likely a budget row is the AI's spending estimate (vs. the user's own budget)
const totalRank = (label) => {
  const l = stripMd(label).toLowerCase()
  if (/estimat|spend|trip cost|total cost/.test(l)) return 3
  if (/total/.test(l) && !/budget/.test(l)) return 2
  if (/total/.test(l)) return 1
  return 0
}

const parseBudget = (lines) => {
  const items = []
  let total = null
  let bestRank = 0
  for (const raw of lines) {
    const line = raw.trim()
    let label = null
    let value = null

    if (line.startsWith('|')) {
      const cells = line.split('|').map((c) => c.trim()).filter(Boolean)
      if (cells.length < 2 || /^:?-+:?$/.test(cells[0])) continue
      label = cells[0]
      value = cells[cells.length - 1]
    } else {
      // "- Hotel: $360" style
      const m = line.match(/^[-*]\s*(.+?)\s*[:—–-]\s*(.+)$/)
      if (m && MONEY_RE.test(m[2])) {
        label = m[1]
        value = m[2]
      }
    }

    if (!label || !value) continue
    const money = stripMd(value).match(MONEY_RE)
    if (!money) continue

    const amount = money[1].replace(/\s+/g, ' ').trim()
    const rank = totalRank(label)
    if (rank > 0) {
      if (rank > bestRank) {
        total = amount
        bestRank = rank
      }
    } else if (!/contingency|reserve|buffer/i.test(label)) {
      items.push({ label: shortLabel(label), amount })
    }
  }
  return { items: items.slice(0, 5), total }
}

const parseFoods = (lines) => {
  const text = lines.join('\n')
  const bolds = boldPhrases(text)
  // Bold text is often a comma list: "sushi, sashimi, grilled fish"
  const parts = bolds.flatMap((b) => b.split(/,|\band\b/)).map((s) => s.trim())
  const foods = unique(parts.filter((s) => isPlaceLike(s) && s.split(' ').length <= 4))
  return foods.slice(0, 5).map((f) => f.charAt(0).toUpperCase() + f.slice(1))
}

const firstTip = (lines) => {
  const bullet = lines.find((l) => /^\s*[-*]\s+/.test(l))
  if (!bullet) return null
  const tip = stripMd(bullet.replace(/^\s*[-*]\s+/, ''))
  return tip.length > 110 ? tip.slice(0, 107).trimEnd() + '…' : tip
}

export const parsePlan = (markdown = '') => {
  const lines = markdown.split(/\r?\n/)
  const sections = splitSections(lines)
  // Day headings ("Day 1 — Tokyo and seafood") must not count as topic sections
  const topics = sections.filter((s) => s.heading && !DAY_RE.test(s.heading))
  const findAll = (re, not) => topics.filter((s) => re.test(s.heading) && !(not && not.test(s.heading)))

  const titleLine = lines.find((l) => /^#{1,3}\s/.test(l) && !DAY_RE.test(l.trim()))
  const budgetSection = findAll(/budget|cost|expense/i)[0]
  const foodSection = findAll(/food|\beat|dining|cuisine|meals?\b|dishes|to try/i, /tip|saving|money/i)[0]

  const days = parseDays(lines)
  const budget = parseBudget(budgetSection ? budgetSection.lines : lines)
  const foods = foodSection ? parseFoods(foodSection.lines) : []
  const tip =
    findAll(/tip|saving|advice/i, /food|eat|dining/i)
      .map((s) => firstTip(s.lines))
      .find(Boolean) || null

  const summary = stripMd(
    lines.filter((l) => l.trim() && !l.startsWith('|') && !/^#/.test(l)).slice(0, 2).join(' ')
  ).slice(0, 220)

  return {
    title: titleLine ? stripMd(titleLine) : '',
    days,
    budget,
    foods,
    tip,
    summary,
    hasDetails: days.length > 0 || budget.items.length > 0,
  }
}

export default parsePlan
