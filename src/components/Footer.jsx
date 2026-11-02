import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-800">
      <div className="mx-auto px-8 pt-10 pb-4 lg:px-12 xl:px-16">

        {/* Main footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Sparkles size={18} />
              </div>

              <span className="text-xl font-bold text-gray-900 dark:text-white">
                TravelAI
              </span>
            </div>

            <p className="mt-5 max-w-md text-gray-500 dark:text-gray-400">
              Plan smarter. Travel better. Let AI turn your travel ideas
              into unforgettable journeys.
            </p>

            <Link to="/dashboard">
              <button  className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105 dark:bg-white dark:text-gray-900">
                Plan My Trip
                <ArrowUpRight size={17} />
              </button>
            </Link>
          </div>

          {/* Explore */}
          <div className="grid grid-cols-2 gap-10 sm:gap-20 md:gap-24">
            <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#destinations" className="transition hover:text-blue-600">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#features" className="transition hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <Link to="/how-it-works" className="whitespace-nowrap transition hover:text-blue-600">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/planner" className="transition hover:text-blue-600">
                  AI Planner
                </Link>
              </li>
              <li>
                <Link to="/trips" className="transition hover:text-blue-600">
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="transition hover:text-blue-600">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TravelAI. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="transition hover:text-gray-900 dark:hover:text-white">
              Privacy
            </Link>

            <Link to="/terms" className="transition hover:text-gray-900 dark:hover:text-white">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer