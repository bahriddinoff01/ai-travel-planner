import { useState, useContext, useEffect } from 'react'
import { Menu, Plane, X, Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion  } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme);
  console.log(toggleTheme);
  useEffect(() => {
    if(theme === "light"){
      document.documentElement.classList.remove("dark")
    }
    else{
      document.documentElement.classList.add("dark")
    }
  }, [theme])
  
  

  return (
    <nav className="relative w-full border-b border-slate-200 bg-white dark:bg-slate-900 ">
      <div className="mx-auto flex w-full items-center justify-between px-8 py-4 lg:px-12 xl:px-16 shadow-md dark:shadow-black">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            TravelAI
          </span>
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex text-slate-600 dark:text-white">
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
          <Link to="/login" className="text-sm font-medium dark:text-white text-slate-600 transition hover:text-slate-900">
            Log in
          </Link>

          <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Plan My Trip
          </button>
          <button onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full  bg-white text-slate-700 transition hover:bg-slate-100  dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
             {theme === "light" ? <Moon size={25}/> : <Sun size={25} className='fill-amber-500 text-amber-500'/>}
          </button>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className='md:flex hidden gap-5'> */}
        {/* </div> */}
        
          <div className="flex md:hidden">
            <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-slate-700 transition dark:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <button onClick={toggleTheme}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full  bg-white text-slate-700 transition hover:bg-slate-100  dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
             {theme === "light" ? <Moon size={25}/> : <Sun size={25} className='fill-amber-500 text-amber-500'/>}
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
      className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
    >
      <div className="flex flex-col gap-4 px-8 py-5">

        <a
          href="#"
          className="text-sm font-medium text-slate-700"
        >
          Explore
        </a>

        <a
          href="#"
          className="text-sm font-medium text-slate-700"
        >
          How It Works
        </a>

        <a
          href="#"
          className="text-sm font-medium text-slate-700"
        >
          About
        </a>

        <hr className="border-slate-200" />

        <Link to="/login" className="text-left text-sm font-medium text-slate-700">
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