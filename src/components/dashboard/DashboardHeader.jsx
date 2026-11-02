import { Menu } from "lucide-react"
import { AuthContext } from '../../context/AuthContext'
import { useContext } from "react"


const DashboardHeader = ({setMenuOpen, user}) => {
  const toggleHandle = () => {
    setMenuOpen(true)
  }
  // const {user} = useContext(AuthContext)
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-2 dark:bg-slate-800 dark:text-white sm:px-8 lg:px-12 xl:px-16">
      <div>
        <h1 className="my-2 text-2xl capitalize sm:text-3xl md:text-4xl">Good evening, {user.username}</h1>
        <span className="text-base sm:text-lg md:text-xl">Ready to plan your next adventure?</span>
      </div>
      <button onClick={toggleHandle} className="shrink-0 lg:hidden" aria-label="Open menu">
        <Menu className="lg:hidden" size={30}/>
      </button>
    </div>
  )
}

export default DashboardHeader