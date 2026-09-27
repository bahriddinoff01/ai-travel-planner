import road from '../assets/road.jpg'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  return (
    <section
      className="relative mx-auto bg-fixed flex min-h-90 w-full items-center justify-center overflow-hidden  bg-cover bg-center px-8 py-16 lg:px-12 xl:px-16"
      style={{ backgroundImage: `url(${road})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold capitalize text-white sm:text-5xl lg:text-6xl">
          Can't decide where to go?
        </h1>

        <p className="mt-5 text-lg text-gray-200 sm:text-xl lg:text-2xl">
          Let AI find your next adventure.
        </p>

        <button className="mt-8 rounded-2xl bg-blue-600 px-7 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95">
          ✨ Surprise Me
        </button>
      </motion.div>
    </section>
  )
}

export default HowItWorks