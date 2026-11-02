import { motion } from 'framer-motion'
import { MapPin, Wallet, UtensilsCrossed, Lightbulb, CalendarDays, RotateCcw, Sparkles } from 'lucide-react'

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

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-2xl bg-slate-200 dark:bg-slate-700" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-24 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
    <div className="mt-6 grid gap-4 md:grid-cols-5">
      <div className="space-y-3 md:col-span-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-12 rounded-xl bg-slate-100 dark:bg-slate-800" />
        ))}
      </div>
      <div className="h-40 rounded-xl bg-slate-100 md:col-span-2 dark:bg-slate-800" />
    </div>
    <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
      <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
      Building your trip…
    </p>
  </div>
)

const ActivePlans = ({ plan, meta, loading, onReset }) => {
  if (!plan && !loading) return null

  const share = plan ? budgetShare(plan.budget.total, meta?.budget, meta?.currency) : null

  return (
    <section id="trip-card" className="scroll-mt-6 px-4 pb-10 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          key={loading ? 'loading' : 'plan'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900"
        >
          {loading ? (
            <Skeleton />
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4">
                {meta?.image && (
                  <img
                    src={meta.image}
                    alt={meta.destination}
                    className="h-14 w-14 shrink-0 rounded-2xl object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                    Your trip is ready
                  </span>
                  <h3 className="text-lg font-bold sm:truncate sm:text-xl dark:text-white">
                    {meta?.destination} · {meta?.days} {meta?.days === 1 ? 'day' : 'days'}
                  </h3>
                  {plan.title && (
                    <p className="line-clamp-1 text-sm text-slate-500 dark:text-slate-400">{plan.title}</p>
                  )}
                </div>
                <button
                  onClick={onReset}
                  aria-label="New plan"
                  className="flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-slate-200 p-2 text-sm font-medium sm:self-center sm:px-3 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <RotateCcw size={15} />
                  <span className="hidden sm:inline">New plan</span>
                </button>
              </div>

              {plan.hasDetails ? (
                <div className="mt-5 grid gap-4 md:grid-cols-5">
                  {/* Itinerary */}
                  <div className="md:col-span-3">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CalendarDays size={16} className="text-blue-600 dark:text-blue-400" />
                      Itinerary
                    </h4>
                    <ol className="space-y-2">
                      {plan.days.map((d) => (
                        <li
                          key={d.day}
                          className="flex gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                            D{d.day}
                          </span>
                          <div className="min-w-0">
                            {d.title && (
                              <p className="text-sm font-semibold dark:text-white">{d.title}</p>
                            )}
                            {d.places.length > 0 && (
                              <p className="mt-0.5 flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                <MapPin size={12} className="mt-0.5 shrink-0 text-rose-500" />
                                <span>{d.places.join(' · ')}</span>
                              </p>
                            )}
                          </div>
                        </li>
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
                            <li key={item.label} className="flex justify-between text-slate-600 dark:text-slate-300">
                              <span>{item.label}</span>
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
                                  {share}% of your {SYMBOLS[meta.currency]}{Number(meta.budget).toLocaleString()} budget
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
            </>
          )}
        </motion.div>
    </section>
  )
}

export default ActivePlans
