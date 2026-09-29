import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import Welcome from '../components/dashboard/Welcome'
import QuickActions from '../components/dashboard/QuickActions'
import { useState } from 'react'

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main className="flex-1 dark:bg-slate-800">
        <DashboardHeader setMenuOpen={setMenuOpen}/>
        <Welcome />
        <QuickActions />
      </main>
    </div>
  )
}

export default Dashboard