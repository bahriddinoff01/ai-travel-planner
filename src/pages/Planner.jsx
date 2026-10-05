import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import PlannerHeader from '../components/planner/PlannerHeader'
import PlannerCarousel from '../components/planner/PlannerCarousel'
import ActivePlans from '../components/planner/ActivePlans'

const Planner = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='flex min-h-screen'>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main className='flex-1 dark:bg-slate-800'>
        <PlannerHeader setMenuOpen={setMenuOpen}/>
        <PlannerCarousel />
        <ActivePlans />
      </main>
    </div>
  )
}

export default Planner