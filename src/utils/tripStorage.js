import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

// Favorites and saved plans live in localStorage for now (no backend endpoint yet),
// kept per account so two people on one browser don't see each other's trips.
export const LISTS = { favorites: 'favorites', saved: 'saved' }

const CHANGE_EVENT = 'trips-changed'

const userKey = (user) => user?.id || user?._id || user?.username || 'guest'
const storageKey = (list, user) => `travelai:${list}:${userKey(user)}`

const read = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key))
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

const write = (key, trips) => {
  try {
    localStorage.setItem(key, JSON.stringify(trips))
  } catch {
    // Storage full or blocked: nothing else we can do in the browser
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

// Returns the list plus add/remove/has helpers; re-renders when any list changes
export const useTripList = (list) => {
  const { user } = useContext(AuthContext)
  const key = storageKey(list, user)
  const [trips, setTrips] = useState(() => read(key))

  useEffect(() => {
    const sync = () => setTrips(read(key))
    sync()
    window.addEventListener(CHANGE_EVENT, sync)
    window.addEventListener('storage', sync) // other tabs
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [key])

  const has = useCallback((id) => trips.some((t) => t.id === id), [trips])

  const add = useCallback(
    (trip) => {
      const current = read(key)
      if (current.some((t) => t.id === trip.id)) return
      write(key, [{ ...trip, savedAt: new Date().toISOString() }, ...current])
    },
    [key]
  )

  const remove = useCallback(
    (id) => write(key, read(key).filter((t) => t.id !== id)),
    [key]
  )

  const toggle = useCallback(
    (trip) => (read(key).some((t) => t.id === trip.id) ? remove(trip.id) : add(trip)),
    [key, add, remove]
  )

  return { trips, has, add, remove, toggle }
}
