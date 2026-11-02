import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinned, SlidersHorizontal, Sparkles, Bookmark, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import road from '../assets/road.jpg'

const steps = [
  {
    icon: MapPinned,
    color: 'text-sky-300 bg-sky-500/15 ring-sky-400/30',
    title: 'Pick a destination',
    text: 'Choose a place you dream about, or let AI surprise you with somewhere new.',
  },
  {
    icon: SlidersHorizontal,
    color: 'text-emerald-300 bg-emerald-500/15 ring-emerald-400/30',
    title: 'Share your style',
    text: 'Tell us your days, budget and what you love: food, nature, culture, shopping.',
  },
  {
    icon: Sparkles,
    color: 'text-purple-300 bg-purple-500/15 ring-purple-400/30',
    title: 'AI builds your plan',
    text: 'Get a day-by-day itinerary with places, timing and an estimated budget.',
  },
  {
    icon: Bookmark,
    color: 'text-rose-300 bg-rose-500/15 ring-rose-400/30',
    title: 'Save and go',
    text: 'Keep your trips and favorites in your dashboard and open them anytime.',
  },
]

const highlights = [
  { value: '4', label: 'simple steps' },
  { value: '< 1 min', label: 'to get a plan' },
  { value: '100%', label: 'personalized' },
]

const HowItWorksPage = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${road})` }}
    >
      {/* Dark overlay + soft glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950/90" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-8 py-6 text-center lg:px-12 xl:px-16">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-200 ring-1 ring-blue-400/40"
        >
          How it works
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-font mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          From an idea to a full trip,
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> in minutes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-gray-200 sm:text-lg"
        >
          TravelAI is an AI travel planner. You tell it where and how you like to travel,
          and it turns that into a ready-to-use itinerary you can save and come back to.
        </motion.p>

        {/* Steps */}
        <div className="relative mt-9 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Line connecting the steps on large screens */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-sky-400/0 via-white/40 to-rose-400/0 lg:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-xl shadow-black/20 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/15"
            >
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${step.color}`}>
                <step.icon size={26} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex w-full flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-black/30 px-8 py-5 backdrop-blur-md md:flex-row"
        >
          <div className="flex flex-wrap justify-center gap-10">
            {highlights.map((h) => (
              <div key={h.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-white sm:text-3xl">{h.value}</p>
                <p className="text-sm text-gray-400">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95"
            >
              ✨ Start Planning
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Meet the team
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default HowItWorksPage
