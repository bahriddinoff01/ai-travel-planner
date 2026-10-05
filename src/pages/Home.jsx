import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import PopularPlaces from '../components/PopularPlaces'

const Home = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Hero />
      <Features />
      <PopularPlaces />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Home