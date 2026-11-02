import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import PlannerHeader from '../components/planner/PlannerHeader'
import PlannerCarousel from '../components/planner/PlannerCarousel'
import ActivePlans from '../components/planner/ActivePlans'
import { parsePlan } from '../utils/parsePlan'

const Planner = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [plan, setPlan] = useState(null)
  const [meta, setMeta] = useState(null)
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
    setPlan(parsePlan(text))
    setMeta(info)
    setLoading(false)
    scrollToCard()
  }

  const handleReset = () => {
    setPlan(null)
    setMeta(null)
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
          hasPlan={!!plan}
          onPlanStart={handleStart}
          onPlanReady={handleReady}
          onPlanError={() => setLoading(false)}
        />
        <ActivePlans plan={plan} meta={meta} loading={loading} onReset={handleReset} />
      </main>
    </div>
  )
}

export default Planner
