"use client"
import { useFavouriteLocations } from "@/hooks/use-favourite-locatiosn"
import { Button, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"

export default function AddToFavouritesButton({
    location,
}: {
    location: { latitude: string; longitude: string; name: string }
}) {
    const {
        favouriteLocations,
        addFavouriteLocation,
        removeFavouriteLocation,
        isPartOfFavourites,
    } = useFavouriteLocations()

    return (
        <ActionIcon
            title="Add to favourites"
            onClick={() => {
                if (isPartOfFavourites(location)) {
                    removeFavouriteLocation(location)
                } else {
                    addFavouriteLocation(location)
                }
            }}
            color={isPartOfFavourites(location) ? "red" : "blue"}
        >
            {/* {isPartOfFavourites(location) ? "Remove from" : "Add to"} favourites */}
            <IconHeart />
        </ActionIcon>
    )
}
