import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import features from "../assets/features.png"
import { Sparkles, Wallet, Heart, Bookmark } from 'lucide-react'
import featureIsland from "../assets/feature_island.png"
import featureLondon from "../assets/feature_london.png"
// import Swiper from "swiper"


const Features = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto items-center px-8 py-12 lg:px-12 xl:px-16 dark:bg-black">
      <div className="flex flex-col gap-5 items-center xl:items-start">
        <span className="text-blue-600 bg-blue-100 px-4 py-2 rounded-4xl capitalize font-bold">Our features</span>
        <div className="font-bold dark:text-white">
          <h2 className="text-3xl md:text-6xl font-serif">Plan Smarter,</h2>
          <h1 className="text-3xl md:text-6xl font-serif ">Plan Further</h1>
        </div>
        <p className=" text-lg font-thin dark:text-white">
          Everything you need to create the perfect trip - 
          from Al-powered<br /> planning to personalized experiences. 
          Your next adventure<br /> is just a few clicks away.
        </p>
        <div className="flex flex-col gap-5 dark:text-white">
          <div className="flex gap-5 items-center">
            <Sparkles className="text-purple-500" size={40}/>
            <div>
              <h4 className="text-lg capitalize font-bold">AI powered planning</h4>
              <span>Get personalized itineraries based on your <br />interests, time, and budget.</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Wallet className="text-green-500" size={40}/>
            <div>
              <h4 className="text-lg capitalize font-bold">Smart budgeting</h4>
              <span>See an estimated budget before you <br />start planning, so you can travel with confidence</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Heart className="text-red-500" size={40}/>
            <div>
              <h4 className="text-lg capitalize font-bold">Personalized Experiences</h4>
              <span>Choose what you love - food, nature, clature,<br />shopping, sports, and more</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Bookmark className="text-blue-500" size={40}/>
            <div>
              <h4 className="text-lg capitalize font-bold">Save your trips</h4>
              <span>Keep your favourite plans and come back to them <br />whenever you need</span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="h-full w-full items-center"
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide className='lg:mt-20'>
         <img src={features} alt="" className=''/>
        </SwiperSlide>
        <SwiperSlide className='lg:mt-20'>
         <img src={featureLondon} alt=""/>
        </SwiperSlide>
        <SwiperSlide className='lg:mt-20'>
         <img src={featureIsland} alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Features