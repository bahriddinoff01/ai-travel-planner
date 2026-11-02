import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Wallet, UtensilsCrossed, Lightbulb, CalendarDays, ChevronDown } from 'lucide-react'
import destinations from '../../data/destinations'

const SYMBOLS = { USD: '$', EUR: '€', GBP: '£', KRW: '₩' }

// Share of the user's budget the AI's estimate uses, when both are in the same currency
const budgetShare = (total, budget, currency) => {
  if (!total || !budget) return null
  const sym = SYMBOLS[currency]
  if (!(total.includes(sym) || total.toUpperCase().includes(currency))) return null
  const value = Number(total.replace(/[^\d.]/g, ''))
  if (!value) return null
  return Math.min(100, Math.round((value / Number(budget)) * 100))
}

// Image URLs change between builds, so saved trips look the picture up by name
const imageFor = (meta) =>
  destinations.find((d) => d.name === meta?.destination)?.image || meta?.image

const DayRow = ({ day }) => {
  const [open, setOpen] = useState(false)
  const canExpand = day.details?.length > 0

  // Shown under the places on phones and at the end of the line from `sm` up
  const toggle = (className) => (
    <button
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={`shrink-0 items-center gap-0.5 rounded-lg px-2 py-1 text-xs font-medium text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-slate-700 ${className}`}
    >
      {open ? 'Less' : 'See more'}
      <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  )

  return (
    <li className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          D{day.day}
        </span>
        <div className="min-w-0 flex-1">
          {day.title && <p className="text-sm font-semibold dark:text-white">{day.title}</p>}
          {day.places.length > 0 && (
            <p className="mt-0.5 flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin size={12} className="mt-0.5 shrink-0 text-rose-500" />
              <span>{day.places.join(' · ')}</span>
            </p>
          )}
          {canExpand && toggle('-ml-2 mt-1 flex sm:hidden')}
        </div>
        {canExpand && toggle('hidden self-center sm:flex')}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-11"
          >
            {day.details.map((line) => (
              <li
                key={line}
                className="mt-1.5 list-disc text-xs leading-relaxed text-slate-600 marker:text-blue-400 dark:text-slate-300"
              >
                {line}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

// Compact view of one parsed AI plan. `badge` is the small green label, `actions` go in the footer.
// `flat` drops the outer box when the card sits inside another container (My Trips, Favorites)
const TripCard = ({ plan, meta, badge, actions, headerAction, flat = false }) => {
  const share = budgetShare(plan.budget.total, meta?.budget, meta?.currency)
  const image = imageFor(meta)

  return (
    <div
      className={
        flat
          ? ''
          : 'rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900'
      }
    >
      {/* Header (the list row already shows it in flat mode) */}
      <div className={`flex items-center gap-3 sm:gap-4 ${flat ? 'hidden' : ''}`}>
        {image && (
          <img src={image} alt={meta.destination} className="h-14 w-14 shrink-0 rounded-2xl object-cover" />
        )}
        <div className="min-w-0 flex-1">
          {badge && (
            <span className="text-xs font-semibold uppercase tracking-wider text-green-600">{badge}</span>
          )}
          <h3 className="text-lg font-bold sm:truncate sm:text-xl dark:text-white">
            {meta?.destination} · {meta?.days} {meta?.days === 1 ? 'day' : 'days'}
          </h3>
          {plan.title && (
            <p className="line-clamp-1 text-sm text-slate-500 dark:text-slate-400">{plan.title}</p>
          )}
        </div>
        {headerAction}
      </div>

      {plan.hasDetails ? (
        <div className={`grid gap-4 md:grid-cols-5 ${flat ? '' : 'mt-5'}`}>
          {/* Itinerary */}
          <div className="md:col-span-3">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <CalendarDays size={16} className="text-blue-600 dark:text-blue-400" />
              Itinerary
            </h4>
            <ol className="space-y-2">
              {plan.days.map((d) => (
                <DayRow key={d.day} day={d} />
              ))}
            </ol>
          </div>

          {/* Expenses + food */}
          <div className="space-y-4 md:col-span-2">
            {(plan.budget.items.length > 0 || plan.budget.total) && (
              <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <Wallet size={16} className="text-green-600" />
                  Expenses
                </h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:grid-cols-1">
                  {plan.budget.items.map((item) => (
                    <li key={item.label} className="flex justify-between gap-2 text-slate-600 dark:text-slate-300">
                      <span className="truncate">{item.label}</span>
                      <span className="font-medium">{item.amount}</span>
                    </li>
                  ))}
                </ul>
                {plan.budget.total && (
                  <div className="mt-2 border-t border-slate-200 pt-2 dark:border-slate-700">
                    <div className="flex justify-between text-sm font-bold dark:text-white">
                      <span>Estimated total</span>
                      <span className="text-blue-600 dark:text-blue-400">{plan.budget.total}</span>
                    </div>
                    {share !== null && (
                      <>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                          <div
                            className={`h-full rounded-full ${share > 95 ? 'bg-amber-500' : 'bg-green-500'}`}
                            style={{ width: `${share}%` }}
                          />
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {share}% of your {SYMBOLS[meta.currency]}
                          {Number(meta.budget).toLocaleString()} budget
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {plan.foods.length > 0 && (
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <UtensilsCrossed size={16} className="text-orange-500" />
                  Food to try
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {plan.foods.map((food) => (
                    <span
                      key={food}
                      className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{plan.summary}</p>
      )}

      {plan.tip && (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-blue-50 p-3 text-xs text-blue-800 dark:bg-blue-500/10 dark:text-blue-200">
          <Lightbulb size={15} className="mt-px shrink-0" />
          {plan.tip}
        </p>
      )}

      {actions && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-slate-700">
          {actions}
        </div>
      )}
    </div>
  )
}

export default TripCard
