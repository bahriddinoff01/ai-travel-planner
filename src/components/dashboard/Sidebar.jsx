import { Map, Heart, Plane, Home, Settings, Moon, LogOut, X, Sun, PlaneIcon } from 'lucide-react'
import { Link, useLocation  } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = ({menuOpen, setMenuOpen}) => {
    const location = useLocation()
    console.log(location.pathname);
    
    const toggleFalse = () => {
        setMenuOpen(false)
    }
    const [model, setmodel] = useState(false)
    const toggle = () => {
        if(model){
            setmodel(false)
        }
        else{
            setmodel(true)
        }
    }
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {logout} = useContext(AuthContext)
  return (
    <>
        <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:flex lg:flex-col">
        <div className="flex h-20 items-center px-6">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white flex gap-2">
                <Plane className="h-6 w-6 dark:text-white" />    TravelAI
            </Link>
        </div>
        <div className="flex flex-col mt-4 gap-2 px-3">
                <Link to="/dashboard" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/dashboard"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                    <Home size={30}/>
                    <span className='text-sm'>Dashboard</span>
                </Link> 
            <Link to="/trips" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/trips"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                <Map size={30}/>
                <span className='text-sm'>My Trips</span>
            </Link>
            <Link to="/favorites" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/favorites"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                <Heart size={30}/>
                <span className='text-sm'>Favorites</span>
            </Link>
        </div>
        <hr className='mt-10 w-[90%] mx-3'/>
        <Link to="/planner" className={`flex items-center gap-4 px-4 py-4 dark:hover:bg-gray-500 ${location.pathname === "/planner"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"} m-3  hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
            <PlaneIcon size={22} /> 
            <span className='capitalize'>plan my trip</span>
        </Link>
        <hr className=' w-[90%] mx-3'/>
        <Link to="/settings" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/settings"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"} m-3  hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
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
        </div>
        <div >
            <Link onClick={toggle} className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <LogOut size={30}/>
                <span className='text-sm'>Log Out</span>
            </Link>
        {model && (
            <div onClick={toggle} className="absolute inset-0 z-999 flex min-h-screen items-center justify-center bg-black/70 px-4">
                <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-lg flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-700 dark:bg-slate-900 sm:p-7">
                    <div className="flex flex-1 items-center justify-center py-8 text-center">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                            Are you sure you want to log out?
                        </h1>
                    </div>               
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
                        <button onClick={toggle} className="w-full rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-slate-800 sm:w-auto">
                            Cancel
                        </button>
                        <button className="w-full rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 sm:w-auto" onClick={logout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        )}
        </div>    
    </aside>

    {
        menuOpen && (
        <div>
        <div onClick={toggleFalse} className='fixed left-0 z-40 bg-black/80 w-[30%] md:w-[40%] h-full'/>
            <aside className="fixed right-0 top-0 h-full min-h-screen md:w-[60%] w-[70%] z-50 transition duration-300 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 flex flex-col">
        <div className="flex h-20 items-center px-6 justify-between">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white flex gap-2">
                <Plane className="h-6 w-6 dark:text-white" />    TravelAI
            </Link>
            <button className='dark:text-white' onClick={toggleFalse}><X /></button>
        </div>
        <div className="flex flex-col mt-4 gap-2 px-3">
            <Link to="/dashboard" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/dashboard"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                    <Home size={30}/>
                    <span className='text-sm'>Dashboard</span>
                </Link> 
           <Link to="/trips" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/trips"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                <Map size={30}/>
                <span className='text-sm'>My Trips</span>
            </Link>
             <Link to="/favorites" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/favorites"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"}   hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
                <Heart size={30}/>
                <span className='text-sm'>Favorites</span>
            </Link>
        </div>
        <hr className='mt-10 w-[90%] mx-3'/>
        <Link to="/planner" className={`flex items-center gap-4 px-4 py-4 dark:hover:bg-gray-500 ${location.pathname === "/planner"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"} m-3  hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
            <PlaneIcon size={22} /> 
            <span className='capitalize'>plan my trip</span>
        </Link>
        <hr className=' w-[90%] mx-3'/>
        <Link to="/settings" className={`flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 ${location.pathname === "/settings"  ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-slate-600" : "text-black  dark:text-white dark:bg-blue-950/40"} m-3  hover:bg-blue-100 rounded-4xl transition-all duration-400`}>
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
        </div>
            <div >
            <Link onClick={toggle} className='flex items-center gap-4 px-4 py-3 dark:hover:bg-gray-500 hover:bg-blue-100 rounded-4xl transition-all duration-400 dark:text-white'>
                <LogOut size={30}/>
                <span className='text-sm'>Log Out</span>
            </Link>
        {model && (
            <div onClick={toggle} className="absolute inset-0 z-999 flex min-h-screen items-center justify-center bg-black/70 px-4">
                <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-lg flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-700 dark:bg-slate-900 sm:p-7">
                    <div className="flex flex-1 items-center justify-center py-8 text-center">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                            Are you sure you want to log out?
                        </h1>
                    </div>               
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
                        <button onClick={toggle} className="w-full rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-slate-800 sm:w-auto">
                            Cancel
                        </button>
                        <button className="w-full rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 sm:w-auto" onClick={logout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        )}
        </div>    
    </aside>
        </div>
        )   
    }
    </>
  )
}

export default Sidebar