import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import road from '../../assets/dashboardroad.jpg'

const Welcome = () => {
  return (
    <div className='dark:bg-slate-800'>
      <section
      className="relative mx-6 flex min-h-72 overflow-hidden rounded-4xl bg-cover bg-center px-6 py-12 sm:mx-8 sm:min-h-90 sm:px-8 sm:py-16 lg:mx-12 lg:bg-fixed lg:px-12 xl:mx-16 xl:px-16"
      style={{ backgroundImage: `url(${road})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-start justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-xl font-bold capitalize text-white sm:text-3xl lg:text-4xl">
          your next adventure <br className="hidden sm:block" /> starts here
        </h1>

        <p className="mt-5 text-md text-gray-200 sm:text-lg lg:text-xl">
          Tell us where you want to go and we'll build <br className="hidden sm:block" /> your perfect itinerary
        </p>

        <Link to="/planner" className="mt-8 rounded-2xl bg-white px-7 py-3 text-black transition-all duration-300 hover:scale-105  active:scale-95">
          ✨ Create my trip
        </Link>
      </motion.div>
    </section>
    </div>
  )
}

export default Welcome