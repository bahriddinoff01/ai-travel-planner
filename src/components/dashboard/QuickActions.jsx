import { Map, Heart, Compass, ArrowRight } from 'lucide-react'

const QuickActions = () => {
  return (
    <div className='dark:bg-slate-800'>
    <h1 className='px-8 lg:px-12 xl:px-16 text-3xl pt-8 dark:text-white'>Qucik Actions</h1>
    <div className='flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto px-8 mt-3 lg:px-12 xl:px-16'>
        <div className="flex flex-col card px-4 py-6 gap-7 w-full shadow-sm rounded-2xl bg-blue-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Map className="h-6 w-6 text-green-600" />
            </div>
            <h1 className='text-xl font-semibold'>Explore Destinations</h1>
            <div className="flex justify-between items-center">
                <p className='text-slate-400 text-md'>Discover amazing places around  <br />the world</p>
                <div className='  p-4 rounded-full bg-blue-100'>
                    <ArrowRight className='text-blue-600'/>
                 </div>
            </div>
        </div>
        <div className="flex flex-col card px-4 py-6 gap-7 w-full shadow-sm rounded-2xl bg-red-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <Heart className="h-6 w-6 text-red-600" />
            </div>
            <h1 className='text-xl font-semibold'>My Trips</h1>
            <div className="flex justify-between items-center">
                <p className='text-slate-400 text-md'>View and manage your <br />saved trips</p>
                <div className=' p-4 rounded-full bg-red-100'>
                    <ArrowRight className='text-red-600'/>
                 </div>
            </div>
        </div> 
        <div className="flex flex-col card px-4 py-6 gap-7 w-full shadow-sm rounded-2xl bg-purple-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Compass className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className='text-xl font-semibold'>Favorites</h1>
            <div className="flex justify-between items-center">
                <p className='text-slate-400 text-md'>Your dream destinations and <br />experiences</p>
                <div className='  p-4 rounded-full bg-purple-100'>
                    <ArrowRight className='text-purple-600'/>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default QuickActions