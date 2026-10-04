import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import Welcome from '../components/dashboard/Welcome'
import QuickActions from '../components/dashboard/QuickActions'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import LoadingScreen from './LoadingScreen'


const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {user, loading} = useContext(AuthContext)
  
  
  return (
    <>
      {
        loading === true ?  <LoadingScreen /> :
        <div className="flex min-h-screen">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <main className="flex-1 dark:bg-slate-800">
          <DashboardHeader setMenuOpen={setMenuOpen} user={user}/>
          <Welcome />
          <QuickActions />
        </main>
        </div>
      }
    </>
  )
}

export default Dashboard