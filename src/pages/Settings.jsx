import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, UserRound, Moon, Sun, Bookmark, Heart, LogOut, Trash2 } from 'lucide-react'
import Sidebar from '../components/dashboard/Sidebar'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import { useTripList, LISTS } from '../utils/tripStorage'

const Card = ({ icon: Icon, title, children }) => (
  <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900">
    <h2 className="flex items-center gap-2 text-lg font-semibold dark:text-white">
      <Icon size={20} className="text-blue-600 dark:text-blue-400" />
      {title}
    </h2>
    <div className="mt-4">{children}</div>
  </section>
)

// Row with a label and how many trips are stored, plus a clear button that asks first
const ListRow = ({ icon: Icon, label, to, list }) => {
  const [confirm, setConfirm] = useState(false)
  const count = list.trips.length

  const clearAll = () => {
    list.trips.forEach((t) => list.remove(t.id))
    setConfirm(false)
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
      <Link to={to} className="flex items-center gap-3 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
        <Icon size={18} />
        <span className="font-medium">{label}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {count} {count === 1 ? 'trip' : 'trips'}
        </span>
      </Link>
      {count > 0 &&
        (confirm ? (
          <div className="flex items-center gap-2">
            <button
              onClick={clearAll}
              className="rounded-xl bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600"
            >
              Delete all
            </button>
            <button
              onClick={() => setConfirm(false)}
              className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm text-slate-600 hover:bg-white dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirm(true)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-red-400 hover:text-red-600 dark:border-slate-600 dark:text-slate-300"
          >
            <Trash2 size={15} />
            Clear
          </button>
        ))}
    </div>
  )
}

const Settings = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const saved = useTripList(LISTS.saved)
  const favorites = useTripList(LISTS.favorites)
  const dark = theme === 'dark'

  return (
    <div className="flex min-h-screen">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="min-w-0 flex-1 dark:bg-slate-800">
        <div className="flex items-center justify-between gap-4 px-6 pt-8 pb-2 sm:px-8 lg:px-12 lg:pt-10 xl:px-16 dark:text-white">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">Settings</h1>
            <p className="mt-1 text-base text-slate-400 sm:text-lg">Your account and preferences</p>
          </div>
          <button onClick={() => setMenuOpen(true)} className="shrink-0 lg:hidden" aria-label="Open menu">
            <Menu size={30} />
          </button>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 px-4 py-6 sm:px-8 lg:px-12">
          <Card icon={UserRound} title="Account">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold uppercase text-white">
                {user?.username?.[0] || '?'}
              </div>
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold capitalize dark:text-white">{user?.username}</p>
                {user?.email && <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user.email}</p>}
              </div>
            </div>
          </Card>

          <Card icon={dark ? Moon : Sun} title="Appearance">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium dark:text-white">Dark mode</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Easier on the eyes at night</p>
              </div>
              <button
                role="switch"
                aria-checked={dark}
                aria-label="Dark mode"
                onClick={toggleTheme}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${dark ? 'bg-blue-600' : 'bg-slate-300'}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${dark ? 'left-6' : 'left-1'}`}
                />
              </button>
            </div>
          </Card>

          <Card icon={Bookmark} title="Saved plans">
            <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
              Saved plans and favorites are stored in this browser for your account.
            </p>
            <div className="space-y-3">
              <ListRow icon={Bookmark} label="My Trips" to="/trips" list={saved} />
              <ListRow icon={Heart} label="Favorites" to="/favorites" list={favorites} />
            </div>
          </Card>

          <button
            onClick={logout}
            className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white px-5 py-3 font-medium text-red-600 transition hover:bg-red-50 dark:border-red-500/30 dark:bg-slate-900 dark:hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </main>
    </div>
  )
}

export default Settings
