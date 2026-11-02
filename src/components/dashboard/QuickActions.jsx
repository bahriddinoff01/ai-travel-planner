import { Map, Heart, Compass, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const actions = [
  {
    to: '/planner',
    title: 'Explore Destinations',
    text: 'Discover amazing places around the world',
    icon: Map,
    card: 'bg-blue-50',
    iconBox: 'rounded-full bg-green-100',
    iconColor: 'text-green-600',
    arrowBox: 'bg-blue-100',
    arrowColor: 'text-blue-600',
  },
  {
    to: '/trips',
    title: 'My Trips',
    text: 'View and manage your saved trips',
    icon: Heart,
    card: 'bg-red-50',
    iconBox: 'rounded-xl bg-red-100',
    iconColor: 'text-red-600',
    arrowBox: 'bg-red-100',
    arrowColor: 'text-red-600',
  },
  {
    to: '/favorites',
    title: 'Favorites',
    text: 'Your dream destinations and experiences',
    icon: Compass,
    card: 'bg-purple-50',
    iconBox: 'rounded-xl bg-purple-100',
    iconColor: 'text-purple-600',
    arrowBox: 'bg-purple-100',
    arrowColor: 'text-purple-600',
  },
]

const QuickActions = () => {
  return (
    <div className='dark:bg-slate-800'>
      <h1 className='px-6 pt-8 text-2xl sm:px-8 sm:text-3xl lg:px-12 xl:px-16 dark:text-white'>Quick Actions</h1>
      <div className='mx-auto mt-3 grid grid-cols-1 gap-6 px-6 pb-10 sm:px-8 md:grid-cols-3 lg:px-12 xl:px-16'>
        {actions.map(({ to, title, text, icon: Icon, card, iconBox, iconColor, arrowBox, arrowColor }) => (
          <Link
            key={to}
            to={to}
            className={`card group flex w-full flex-col gap-7 rounded-2xl px-4 py-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${card}`}
          >
            <div className={`flex h-12 w-12 items-center justify-center ${iconBox}`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className="flex items-center justify-between gap-3">
              <p className='text-md text-slate-400'>{text}</p>
              <div className={`shrink-0 rounded-full p-4 transition-transform group-hover:translate-x-1 ${arrowBox}`}>
                <ArrowRight className={arrowColor} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
