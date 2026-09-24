import destinations from '../data/destinations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative h-screen w-full">

      {/* Navbar — only ONE */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Carousel */}
      <Swiper
        className="h-full w-full"
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="relative h-full w-full overflow-hidden">

              {/* Background */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center text-white">
                <h1 className="text-4xl font-bold md:text-6xl font-">
                  AI Travel Plan
                  </h1>

                <h3 className="text-3xl">
                  {destination.name}
                </h3>

                <p className="max-w-xl px-6 text-2xl text-gray-200">
                  {destination.tagline}
                </p>

                <p className="max-w-xl px-6 text-gray-200">
                  {destination.description}
                </p>

                <button className="cursor-pointer rounded-3xl bg-blue-600 px-4 py-2 text-white">
                  ✨ Create My Trip
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Hero