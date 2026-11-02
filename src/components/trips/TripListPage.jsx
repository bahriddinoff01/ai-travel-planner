import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown, Trash2, Heart, Bookmark, Plus } from 'lucide-react'
import Sidebar from '../dashboard/Sidebar'
import TripCard from '../planner/TripCard'
import TripActionButton from '../planner/TripActionButton'
import destinations from '../../data/destinations'
import { useTripList, LISTS } from '../../utils/tripStorage'

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : ''

const TripRow = ({ trip, listName, list, otherList }) => {
  const [open, setOpen] = useState(false)
  const image = destinations.find((d) => d.name === trip.meta?.destination)?.image
  const inOther = otherList.has(trip.id)
  // On My Trips the extra button adds to Favorites, and the other way round
  const other = listName === LISTS.saved
    ? { icon: Heart, tone: 'rose', on: 'In favorites', off: 'Add to favorites' }
    : { icon: Bookmark, tone: 'blue', on: 'Saved', off: 'Save plan' }

  return (
    <li className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {/* Summary row */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-3 text-left transition hover:bg-slate-50 sm:gap-4 sm:p-4 dark:hover:bg-slate-800"
      >
        {image && <img src={image} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover sm:h-14 sm:w-14" />}
        <div className="min-w-0 flex-1">
          <p className="font-semibold dark:text-white">
            {trip.meta?.destination} · {trip.meta?.days} {trip.meta?.days === 1 ? 'day' : 'days'}
          </p>
          <p className="truncate text-xs text-slate-500 sm:text-sm dark:text-slate-400">
            {trip.plan?.title || 'Travel plan'}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">Saved {formatDate(trip.savedAt)}</p>
        </div>
        {trip.plan?.budget?.total && (
          <span className="hidden shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 sm:block dark:bg-blue-500/10 dark:text-blue-300">
            {trip.plan.budget.total}
          </span>
        )}
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-200 p-4 sm:p-5 dark:border-slate-700">
              <TripCard
                flat
                plan={trip.plan}
                meta={trip.meta}
                actions={
                  <>
                    <TripActionButton
                      icon={other.icon}
                      tone={other.tone}
                      active={inOther}
                      label={inOther ? other.on : other.off}
                      onClick={() => otherList.toggle(trip)}
                    />
                    <TripActionButton
                      icon={Trash2}
                      label="Remove"
                      onClick={() => list.remove(trip.id)}
                      className="hover:!border-red-400 hover:!text-red-600 sm:ml-auto"
                    />
                  </>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

// Shared layout for the My Trips and Favorites pages
const TripListPage = ({ listName, title, subtitle, emptyIcon: EmptyIcon, emptyText }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const list = useTripList(listName)
  const otherList = useTripList(listName === LISTS.saved ? LISTS.favorites : LISTS.saved)

  return (
    <div className="flex min-h-screen">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="min-w-0 flex-1 dark:bg-slate-800">
        <div className="flex items-center justify-between gap-4 px-6 pt-8 pb-2 sm:px-8 lg:px-12 lg:pt-10 xl:px-16 dark:text-white">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
            <p className="mt-1 text-base text-slate-400 sm:text-lg">{subtitle}</p>
          </div>
          <button onClick={() => setMenuOpen(true)} className="shrink-0 lg:hidden" aria-label="Open menu">
            <Menu size={30} />
          </button>
        </div>

        <section className="px-4 py-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-6xl">
            {list.trips.length === 0 ? (
              <div className="flex flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-600 dark:bg-slate-900">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10">
                  <EmptyIcon className="text-blue-600 dark:text-blue-400" size={26} />
                </div>
                <p className="mt-4 max-w-sm text-slate-500 dark:text-slate-400">{emptyText}</p>
                <Link
                  to="/planner"
                  className="mt-6 flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700 active:scale-95"
                >
                  <Plus size={18} />
                  Plan a trip
                </Link>
              </div>
            ) : (
              <>
                <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                  {list.trips.length} {list.trips.length === 1 ? 'trip' : 'trips'}
                </p>
                <ul className="space-y-3">
                  {list.trips.map((trip) => (
                    <TripRow
                      key={trip.id}
                      trip={trip}
                      listName={listName}
                      list={list}
                      otherList={otherList}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default TripListPage
