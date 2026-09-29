import { motion } from 'framer-motion'
import road from '../../assets/dashboardroad.jpg'
import { div } from 'framer-motion/client'

const Welcome = () => {
  return (
    <div className='dark:bg-slate-800'>
      <section
      className="relative mx-6 sm:mx-auto rounded-4xl bg-fixed flex min-h-90 w-[89%] sm:w-[93%]  overflow-hidden bg-cover bg-center px-8 py-16 lg:px-12 xl:px-16"
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
          your next adventure <br /> starts here
        </h1>

        <p className="mt-5 text-md text-gray-200 sm:text-lg lg:text-xl">
          Tell us where you want to go and we'll build <br /> your perfect itinerary
        </p>

        <button className="mt-8 rounded-2xl bg-white px-7 py-3 text-black transition-all duration-300 hover:scale-105  active:scale-95">
          ✨ Create my trip
        </button>
      </motion.div>
    </section>
    </div>
  )
}

export default Welcome