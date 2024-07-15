import { useQuery } from "@tanstack/react-query"
import { CLIENT } from "../client"

export namespace QUERIES {
    export function useGeoDataQuery(query: string) {
        return useQuery({
            queryKey: ["geoData", { query }],
            queryFn: async () => CLIENT.getGeoDataSearch(query),
        })
    }
}
