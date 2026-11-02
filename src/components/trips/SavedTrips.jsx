import { Bookmark } from 'lucide-react'
import TripListPage from './TripListPage'
import { LISTS } from '../../utils/tripStorage'

const SavedTrips = () => (
  <TripListPage
    listName={LISTS.saved}
    title="My Trips"
    subtitle="Plans you saved from the planner"
    emptyIcon={Bookmark}
    emptyText="No saved plans yet. Create a plan and tap “Save plan” to keep it here."
  />
)

export default SavedTrips
