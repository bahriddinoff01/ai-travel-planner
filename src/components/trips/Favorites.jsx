import { Heart } from 'lucide-react'
import TripListPage from './TripListPage'
import { LISTS } from '../../utils/tripStorage'

const Favorites = () => (
  <TripListPage
    listName={LISTS.favorites}
    title="Favorites"
    subtitle="Your dream trips in one place"
    emptyIcon={Heart}
    emptyText="No favorites yet. Tap “Add to favorites” on any plan you love."
  />
)

export default Favorites
