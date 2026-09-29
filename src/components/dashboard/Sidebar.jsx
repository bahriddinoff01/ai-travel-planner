import { div } from 'framer-motion/client'
import { Map, Heart, Plane, Home, Sparkles, Settings, Moon, LogOut, X, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

const Sidebar = ({menuOpen, setMenuOpen}) => {
    const toggleFalse = () => {
        setMenuOpen(false)
    }
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
        <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:flex lg:flex-col">
        <div className="flex h-20 items-center px-6">
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex gap-2">
                <Plane className="h-6 w-6 dark:text-white" />    TravelAI
            </span>
        </div>
        <div className="flex flex-col mt-4 gap-2 px-3">
            <Link to="/" className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 text-blue-600 bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 hover:bg-blue-100 rounded-4xl transition-all duration-400'>
                <Home size={30}/>
                <span className='text-sm'>Dashboard</span>
            </Link>
            <Link to="/" className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Map size={30}/>
                <span className='text-sm'>My Trips</span>
            </Link>
            <Link to="/" className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Heart size={30}/>
                <span className='text-sm'>Favorites</span>
            </Link>
        </div>
        <hr className='mt-10 w-[90%] mx-3'/>
        <Link to="/planner" className='flex items-center justify-center gap-3 my-10 mx-4 bg-blue-600 text-white px-4 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700'>
            <Sparkles size={22} /> 
            <span className='capitalize'>plan my trip</span>
        </Link>
        <hr className=' w-[90%] mx-3'/>
        <Link to="/" className='flex items-center gap-4 px-4 py-3 mt-5 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Settings size={30}/>
                <span className='text-sm'>Settings</span>
        </Link>
        <div className="mt-auto" onClick={toggleTheme}>
            {theme === "light" ? 
            <button className='flex items-center gap-4 px-4 py-3'>
                <Moon size={30}/>
                <span className='text-sm'>Dark Mode</span>
            </button> : 
            <button className='flex items-center gap-4 px-4 py-3'>
                <Sun size={30} className='text-white'/>
                <span className='text-sm text-white'>Light Mode</span>
            </button>}
            <Link className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <LogOut size={30}/>
                <span className='text-sm'>Log Out</span>
            </Link>
        </div>
    </aside>

    {
        menuOpen && (
        <div>
        <div onClick={toggleFalse} className='fixed left-0 z-40 bg-black/80 w-[30%] md:w-[40%] h-full'/>
            <aside className="fixed right-0 top-0 h-full min-h-screen md:w-[60%] w-[70%] z-50 transition duration-300 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 flex flex-col">
        <div className="flex h-20 items-center px-6 justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex gap-2">
                <Plane className="h-6 w-6 dark:text-white" />    TravelAI
            </span>
            <button className='dark:text-white' onClick={toggleFalse}><X /></button>
        </div>
        <div className="flex flex-col mt-4 gap-2 px-3">
            <Link to="/" className='flex items-center gap-4 px-4 py-3 text-blue-600 bg-blue-100 dark:hover:bg-gray-500 dark:bg-blue-950/40 dark:text-blue-400 hover:bg-blue-100 rounded-4xl transition-all duration-400'>
                <Home size={30}/>
                <span className='text-sm'>Dashboard</span>
            </Link>
            <Link to="/" className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Map size={30}/>
                <span className='text-sm'>My Trips</span>
            </Link>
            <Link to="/" className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Heart size={30}/>
                <span className='text-sm'>Favorites</span>
            </Link>
        </div>
        <hr className='mt-10 w-[90%] mx-3'/>
        <Link to="/planner" className='flex items-center justify-center gap-3 my-10 mx-4 bg-blue-600 text-white px-4 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700'>
            <Sparkles size={22} /> 
            <span className='capitalize'>plan my trip</span>
        </Link>
        <hr className=' w-[90%] mx-3'/>
        <Link to="/" className='flex items-center gap-4 px-4 py-3 mt-5 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <Settings size={30}/>
                <span className='text-sm'>Settings</span>
        </Link>
        <div className="mt-auto" onClick={toggleTheme}>
            {theme === "light" ? 
            <button className='flex items-center gap-4 px-4 py-3'>
                <Moon size={30}/>
                <span className='text-sm'>Dark Mode</span>
            </button> : 
            <button className='flex items-center gap-4 px-4 py-3'>
                <Sun size={30} className='text-white'/>
                <span className='text-sm text-white'>Light Mode</span>
            </button>}
            <Link className='flex items-center gap-4 px-4 py-3 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <LogOut size={30}/>
                <span className='text-sm'>Log Out</span>
            </Link>
        </div>
    </aside>
        </div>
        )   
    }
    </>
  )
}

export default Sidebar