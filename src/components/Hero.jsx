import destinations from '../data/destinations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



const Hero = () => {
  return (
    <>
        <Swiper
        className="h-[90vh] w-full"
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop>
        {destinations.map((destinations) => (
            <SwiperSlide key={destinations.id}>
            <div className="relative h-full w-full overflow-hidden">
                {/* Background */}
                <img src={destinations.image} alt="Japan" className="absolute inset-0 h-full w-full object-cover"/>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center text-white">
                    <h1 className='text-4xl font-bold md:text-6xl'>Ai Powered Travel Plans </h1>
                    <h3 className="text-3xl">{destinations.name}</h3>
                    <p className='max-w-xl px-6 text-gray-200 text-2xl'>{destinations.tagline}</p>
                    <p className='max-w-xl px-6 text-gray-200'>{destinations.description}</p>
                    <button className='bg-blue-600 px-4 py-2 rounded-3xl text-white cursor-pointer'>✨ Create My Trip</button>
                </div>
            </div>
            </SwiperSlide>
            )) 
        }
        </Swiper>
    </>
  )
}

export default Hero