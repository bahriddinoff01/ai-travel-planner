import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import PlannerHeader from '../components/planner/PlannerHeader'
import PlannerCarousel from '../components/planner/PlannerCarousel'
import ActivePlans from '../components/planner/ActivePlans'
import { parsePlan } from '../utils/parsePlan'

const Planner = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  // trip = { id, plan (parsed), meta } — the same object gets stored in favorites/saved
  const [trip, setTrip] = useState(null)
  const [loading, setLoading] = useState(false)
  // Changing the key remounts the carousel, which clears all its answers
  const [carouselKey, setCarouselKey] = useState(0)

  const scrollToCard = () =>
    requestAnimationFrame(() =>
      document.getElementById('trip-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    )

  const handleStart = () => {
    setLoading(true)
    scrollToCard()
  }

  const handleReady = (text, info) => {
    // eslint-disable-next-line no-unused-vars
    const { image, ...meta } = info // image is looked up by name when shown
    setTrip({ id: `trip-${Date.now()}`, plan: parsePlan(text), meta })
    setLoading(false)
    scrollToCard()
  }

  const handleReset = () => {
    setTrip(null)
    setCarouselKey((k) => k + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex min-h-screen'>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main className='min-w-0 flex-1 dark:bg-slate-800'>
        <PlannerHeader setMenuOpen={setMenuOpen}/>
        <PlannerCarousel
          key={carouselKey}
          hasPlan={!!trip}
          onPlanStart={handleStart}
          onPlanReady={handleReady}
          onPlanError={() => setLoading(false)}
        />
        <ActivePlans trip={trip} loading={loading} onReset={handleReset} />
      </main>
    </div>
  )
}

export default Planner
