"use client"
import { useContext } from "react"
import { useLocalStorageState } from "./use-local-storage-state"
import { favouriteLocationsContext } from "@/provider/FavouriteLocationsProvider"

export function useFavouriteLocations() {
    return useContext(favouriteLocationsContext)
}
