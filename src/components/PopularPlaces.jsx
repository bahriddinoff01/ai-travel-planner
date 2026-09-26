import destinations from "../data/destinations"

const PopularPlaces = () => {
    const popularDestinations = destinations.filter((destinations)=> destinations.popularPlaces)
  return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {popularDestinations.map((destinations) => (
                <div>
                    <img src={destinations.image} alt={destinations.name} />
                </div>
            ))}
        </div>
      </>
  )
}

export default PopularPlaces