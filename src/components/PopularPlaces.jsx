import destinations from "../data/destinations"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const PopularPlaces = () => {
    const popularDestinations = destinations.filter((destinations)=> destinations.popularPlaces)
  return (
      <>
        <div className="grid h-150 grid-cols-1 gap-4 md:h-125 md:grid-cols-3 md:grid-rows-2 lg:h-150 mx auto  px-8 py-4 lg:px-12 xl:px-16 ">
  {popularDestinations.map((destinations, index) => (
    <Link
      key={destinations.id}
      to={`/planner?destinations=${encodeURIComponent(destinations.name)}`}
      className={
        index === 0
          ? "relative group overflow-hidden rounded-2xl md:col-start-1 md:row-span-2"
          : index === 1
            ? "relative group overflow-hidden rounded-2xl md:col-start-2 md:row-start-1"
            : index === 2
              ? "relative group overflow-hidden rounded-2xl md:col-start-2 md:row-start-2"
              : "relative group overflow-hidden rounded-2xl md:col-start-3 md:row-span-2"
      }
    >
      <img
        src={destinations.image}
        alt={destinations.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-5 text-white md:p-6">
        <h3 className="text-xl font-bold md:text-2xl">
          {destinations.name}
        </h3>

        <div className="flex items-center justify-between gap-10">
            <p className="mt-1 max-w-sm text-sm text-white/80 md:text-base">
                {destinations.description}
            </p>
            <ArrowUpRight size={50}/>
        </div>
      </div>
    </Link>
  ))}
</div>
      </>
  )
}

export default PopularPlaces