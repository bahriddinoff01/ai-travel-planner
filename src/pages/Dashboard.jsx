import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        Dashboard content
      </main>
    </div>
  )
}

export default Dashboard