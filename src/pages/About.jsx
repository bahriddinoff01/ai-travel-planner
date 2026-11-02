import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Code2, Lightbulb, PenTool, Rocket, Globe, Users, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import bg from '../assets/dashboardroad.jpg'

const journey = [
  { icon: Lightbulb, title: 'The idea', text: 'Planning a trip takes hours. We wanted AI to do it in minutes.' },
  { icon: PenTool, title: 'Design', text: 'Sketched every screen ourselves, from the hero to the dashboard.' },
  { icon: Code2, title: 'Build', text: 'Wrote the frontend and backend from scratch, line by line.' },
  { icon: Rocket, title: 'Launch', text: 'Deployed live on GitHub Pages for anyone to use.' },
]

const stats = [
  { icon: Users, value: '3', label: 'Students' },
  { icon: GraduationCap, value: 'Gachon', label: 'University' },
  { icon: Code2, value: '0 → Hero', label: 'Built from scratch' },
  { icon: Globe, value: 'Live', label: 'On GitHub Pages' },
]

const stack = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'REST API']

const About = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay + glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-black/70 to-blue-950/80" />
      <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-8 py-10 lg:grid-cols-2 lg:px-12 xl:px-16 lg:py-6">
        {/* Left: our story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center text-white lg:items-start lg:text-left"
        >
          <span className="rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-200 ring-1 ring-blue-400/40">
            About us
          </span>

          <h1 className="heading-font mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Three students.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One big trip.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-gray-200 sm:text-lg">
            TravelAI was built by three students at <span className="font-semibold text-white">Gachon University</span>:
            a <span className="font-semibold text-white">back-end developer</span>, a{' '}
            <span className="font-semibold text-white">front-end developer</span> and a{' '}
            <span className="font-semibold text-white">designer</span>.
          </p>
          <p className="mt-3 max-w-xl text-base text-gray-300 sm:text-lg">
            We took it from zero to hero: no templates, just an idea, a lot of coffee and
            many late nights. Today it is live on GitHub Pages, helping people plan smarter and travel better.
          </p>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95"
            >
              ✨ Try TravelAI
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </motion.div>

        {/* Right: stats + journey */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md"
              >
                <s.icon size={22} className="text-blue-300" />
                <p className="mt-3 text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-white backdrop-blur-md">
            <h2 className="text-lg font-bold">Our journey</h2>
            <ol className="relative mt-5 space-y-5 border-l border-white/15 pl-6">
              {journey.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                  className="relative"
                >
                  <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-950/60">
                    <step.icon size={13} />
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default About
