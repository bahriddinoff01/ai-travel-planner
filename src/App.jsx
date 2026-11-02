import './App.css'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import Planner from './pages/Planner'
import SavedTrips from './components/trips/SavedTrips'
import Favorites from './components/trips/Favorites'
import HowItWorksPage from './pages/HowItWorksPage'
import About from './pages/About'
import Settings from './pages/Settings'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ScrollToTop from './routes/ScrollToTop'

function App() {
  return (
    <>

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path='/settings' element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }/>
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
              <Favorites />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App