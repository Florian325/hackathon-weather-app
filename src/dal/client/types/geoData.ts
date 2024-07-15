export interface GeoDataResponse {
    results?: GeoData[]
    generationtime_ms: number
}

export interface GeoData {
    id: number
    name: string
    latitude: number
    longitude: number
    elevation: number
    feature_code: string
    country_code: string
    admin1_id: number
    admin2_id?: number // Optional because it's not present in every result
    admin3_id?: number // Optional because it's not present in every result
    admin4_id?: number // Optional because it's not present in every result
    timezone: string
    population: number
    postcodes: string[]
    country_id: number
    country: string
    admin1: string
    admin2?: string // Optional because it's not present in every result
    admin3?: string // Optional because it's not present in every result
    admin4?: string // Optional because it's not present in every result
}
