import { GeoDataResponse } from "./types/geoData"

export namespace CLIENT {
    export async function getGeoDataSearch(
        query: string,
        count: number = 10
    ): Promise<GeoDataResponse> {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=${count}&language=de&format=json`
        )
        return await response.json()
    }

    export async function getWeatherData({
        latitudeParam,
        longitudeParam,
    }: {
        latitudeParam: number
        longitudeParam: number
    }) {
        const params = {
            latitude: latitudeParam,
            longitude: longitudeParam,
            current: [
                "temperature_2m",
                "is_day",
                "weather_code",
                "precipitation",
            ],
            daily: ["temperature_2m_max", "temperature_2m_min"],
            models: "icon_seamless",
        }
        const urlParams = new URLSearchParams(params as any)
        const url = "https://api.open-meteo.com/v1/forecast"
        const response = await fetch(url + "?" + urlParams)

        return (await response.json()) as WeatherData
    }
}
