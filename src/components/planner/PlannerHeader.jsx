import { Menu, PlaneIcon } from "lucide-react"

const PlannerHeader = ({setMenuOpen}) => {
    const toggleHandle = () =>{
        setMenuOpen(true)
    }
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-2 pt-8 dark:text-white sm:px-8 lg:justify-center lg:px-12 lg:pt-10 xl:px-16">
      <div className="lg:items-center flex flex-col">
        <h1 className="my-2 text-2xl sm:text-3xl md:text-4xl">PLAN YOUR TRIP</h1>
        <p className="flex items-center gap-2 text-base text-slate-400 sm:text-lg md:text-xl">Build your perfect journey with TravelAI <span><PlaneIcon /></span></p>
      </div>
      <button onClick={toggleHandle} className="shrink-0 lg:hidden" aria-label="Open menu">
        <Menu className="lg:hidden" size={30}/>
      </button>
    </div>
  )
}

export default PlannerHeader