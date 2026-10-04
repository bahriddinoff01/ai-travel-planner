import { Menu } from "lucide-react"
import { AuthContext } from '../../context/AuthContext'
import { useContext } from "react"


const DashboardHeader = ({setMenuOpen, user}) => {
  const toggleHandle = () => {
    setMenuOpen(true)
  }
  // const {user} = useContext(AuthContext)
  return (
    <div className="flex items-center  justify-between dark:bg-slate-800 dark:text-white px-8 py-2 lg:px-12 xl:px-16">
      <div>
        <h1 className="capitalize text-3xl sm:text-2xl md:text-4xl my-2">Good evening, {user.username}</h1>
        <span className="text-md sm:text-lg md:text-xl">Ready to plan your next adventure?</span>
      </div>
      <button onClick={toggleHandle}>
        <Menu className="lg:hidden" size={30}/>
      </button>
    </div>
  )
}

export default DashboardHeader