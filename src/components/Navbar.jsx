import { useState, useContext, useEffect } from 'react'
import { Menu, Plane, X, Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme);
  console.log(toggleTheme);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
    }
    else {
      document.documentElement.classList.add("dark")
    }
  }, [theme])



  return (
    <nav className="w-full text-white bg-slate-950/80 backdrop-blur-ad">
      <div className="mx-auto flex w-full items-center justify-between px-8 py-4 lg:px-12 xl:px-16 ">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-white" />
          <Link to="/" className="text-xl font-bold ">
            TravelAI
          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex ">
          <Link to="/"><a
            href="#"
            className="text-sm font-medium  transition hover:text-slate-900"
          >
            Home
          </a></Link>
          <a
            href="#"
            className="text-sm font-medium  transition hover:text-slate-900"
          >
            Explore
          </a>

          <a
            href="#"
            className="text-sm font-medium  transition hover:text-slate-900"
          >
            How It Works
          </a>

          <a
            href="#"
            className="text-sm font-medium  transition hover:text-slate-900"
          >
            About
          </a>

        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="text-sm font-medium text-white transition ">
            Log in
          </Link>

          <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Plan My Trip
          </button>
          <button onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center transition "
          >
            {theme === "light" ? <Moon size={25} text-white /> : <Sun size={25} className='fill-amber-500 text-amber-500' />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className='md:flex hidden gap-5'> */}
        {/* </div> */}

        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <button onClick={toggleTheme}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full   transition "
          >
            {theme === "light" ? <Moon size={25} /> : <Sun size={25} className='fill-amber-500 text-amber-500' />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-slate-950/10 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-8 py-5">

              <a
                href="#"
                className="text-sm font-medium text-white"
              >
                Explore
              </a>

              <a
                href="#"
                className="text-sm font-medium text-white"
              >
                How It Works
              </a>

              <a
                href="#"
                className="text-sm font-medium text-white"
              >
                About
              </a>

              <hr className="border-slate-200" />

              <Link to="/login" className="text-left text-sm font-medium text-white">
                Log in
              </Link>

              <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
                Plan My Trip
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar