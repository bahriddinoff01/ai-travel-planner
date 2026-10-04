import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto px-8 pt-10 pb-4 lg:px-12 xl:px-16">

        {/* Main footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">

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
          <div className='flex items-center mt-10 justify-between md:justify-between gap-70 md:gap-30'>
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
                <a href="#how-it-works" className="transition hover:text-blue-600">
                  How It Works
                </a>
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
                <a href="/planner" className="transition hover:text-blue-600">
                  AI Planner
                </a>
              </li>
              <li>
                <a href="/login" className="transition hover:text-blue-600">
                  My Trips
                </a>
              </li>
              <li>
                <a href="/login" className="transition hover:text-blue-600">
                  Favorites
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom */}
        <div className=" mt-14 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TravelAI. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-gray-900 dark:hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-gray-900 dark:hover:text-white">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer