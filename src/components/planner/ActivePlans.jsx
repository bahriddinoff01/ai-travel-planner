import { motion } from 'framer-motion'
import { Heart, Bookmark, RotateCcw, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import TripCard from './TripCard'
import TripActionButton from './TripActionButton'
import { useTripList, LISTS } from '../../utils/tripStorage'

const Skeleton = () => (
  <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900">
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

// The freshly generated plan, shown under the planner carousel
const ActivePlans = ({ trip, loading, onReset }) => {
  const favorites = useTripList(LISTS.favorites)
  const saved = useTripList(LISTS.saved)

  if (!trip && !loading) return null

  const isFav = trip && favorites.has(trip.id)
  const isSaved = trip && saved.has(trip.id)

  return (
    <section id="trip-card" className="scroll-mt-6 px-4 pb-10 sm:px-8 lg:px-12 xl:px-16">
      <motion.div
        key={loading ? 'loading' : trip.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl"
      >
        {loading ? (
          <Skeleton />
        ) : (
          <TripCard
            plan={trip.plan}
            meta={trip.meta}
            badge="Your trip is ready"
            actions={
              <>
                <TripActionButton
                  icon={Heart}
                  tone="rose"
                  active={isFav}
                  label={isFav ? 'In favorites' : 'Add to favorites'}
                  onClick={() => favorites.toggle(trip)}
                />
                <TripActionButton
                  icon={Bookmark}
                  active={isSaved}
                  label={isSaved ? 'Saved' : 'Save plan'}
                  onClick={() => saved.toggle(trip)}
                />
                <TripActionButton
                  icon={RotateCcw}
                  label="New plan"
                  onClick={onReset}
                  className="sm:ml-auto"
                />
                {(isFav || isSaved) && (
                  <p className="w-full text-xs text-slate-500 dark:text-slate-400">
                    Find it in{' '}
                    {isSaved && (
                      <Link to="/trips" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                        My Trips
                      </Link>
                    )}
                    {isFav && isSaved && ' and '}
                    {isFav && (
                      <Link to="/favorites" className="font-medium text-rose-600 hover:underline dark:text-rose-400">
                        Favorites
                      </Link>
                    )}
                    .
                  </p>
                )}
              </>
            }
          />
        )}
      </motion.div>
    </section>
  )
}

export default ActivePlans
