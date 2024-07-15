interface WeatherData {
    current: {
        time: number
        temperature_2m: number
        is_day: number
        weather_code: number
        precipitation: number
    }
    daily: {
        time: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
    }
}
