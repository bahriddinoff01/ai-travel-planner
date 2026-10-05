import './App.css'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import Planner from './pages/Planner'
import SavedTrips from './components/trips/SavedTrips'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path='/planner' element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }/>
          <Route path='/trips' element={
            <ProtectedRoute>
              <SavedTrips />
            </ProtectedRoute>
          }/>
          <Route path='/favorites' element={
            <ProtectedRoute>
              <SavedTrips />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App