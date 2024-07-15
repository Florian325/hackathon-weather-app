"use client"
import dynamic from "next/dynamic"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const DynamicFavouriteLocationsProvider = dynamic(
    () => import("./FavouriteLocationsProvider"),
    {
        ssr: false,
    }
)

const queryClient = new QueryClient()

export const ClientProviders = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <DynamicFavouriteLocationsProvider>
                {children}
            </DynamicFavouriteLocationsProvider>
        </QueryClientProvider>
    )
}
