"use client"

import { useLocalStorageState } from "@/hooks/use-local-storage-state"
import { createContext } from "react"

export interface FavouriteLocation {
    latitude: string
    longitude: string
    name: string
}

export const favouriteLocationsContext = createContext<{
    favouriteLocations: FavouriteLocation[]
    addFavouriteLocation: (location: FavouriteLocation) => void
    removeFavouriteLocation: (location: FavouriteLocation) => void
    isPartOfFavourites: (location: FavouriteLocation) => boolean
}>({
    favouriteLocations: [],
    addFavouriteLocation: () => {},
    removeFavouriteLocation: () => {},
    isPartOfFavourites: () => false,
})

export default function FavouriteLocationsProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [favouriteLocations, setFavouriteLocations] = useLocalStorageState<
        FavouriteLocation[]
    >("favouriteLocations", [])

    const addFavouriteLocation = (location: {
        latitude: string
        longitude: string
        name: string
    }) => {
        setFavouriteLocations((prev) => [...prev, location])
    }

    const removeFavouriteLocation = (location: {
        latitude: string
        longitude: string
        name: string
    }) => {
        setFavouriteLocations((prev) =>
            prev.filter(
                (item) =>
                    item.latitude !== location.latitude &&
                    item.longitude !== location.longitude &&
                    item.name !== location.name
            )
        )
    }

    const isPartOfFavourites = (location: {
        latitude: string
        longitude: string
        name: string
    }) => {
        return favouriteLocations.some(
            (item) =>
                item.latitude === location.latitude &&
                item.longitude === location.longitude &&
                item.name === location.name
        )
    }
    return (
        <favouriteLocationsContext.Provider
            value={{
                favouriteLocations,
                addFavouriteLocation,
                removeFavouriteLocation,
                isPartOfFavourites,
            }}
        >
            {children}
        </favouriteLocationsContext.Provider>
    )
}
