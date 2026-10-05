import { Menu, PlaneIcon } from "lucide-react"

const PlannerHeader = ({setMenuOpen}) => {
    const toggleHandle = () =>{
        setMenuOpen(true)
    }
  return (
    <div className="flex items-center justify-between lg:justify-center pt-10   dark:text-white px-8 py-2 lg:px-12 xl:px-16">
      <div className="lg:items-center flex flex-col">
        <h1 className=" text-3xl sm:text-2xl md:text-4xl my-2">PLAN YOUR TRIP</h1>
        <p className="text-md flex gap-2 sm:text-lg md:text-xl text-slate-400">Build your perfect journey with TravelAI <span><PlaneIcon /></span></p>
      </div>
      <button onClick={toggleHandle}>
        <Menu className="lg:hidden" size={30}/>
      </button>
    </div>
  )
}

export default PlannerHeader