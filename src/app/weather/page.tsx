import dynamic from "next/dynamic"
import { DAL } from "@/dal"
import { LineChart } from "@mantine/charts"
import { Center, Container, Stack, Text, Title } from "@mantine/core"
import WeatherGrid from "./WeatherGrid"

const DynamicAddToFavouritesButton = dynamic(
    () => import("./AddToFavouritesButton"),
    { ssr: false }
)

export default async function Page({
    searchParams,
}: {
    searchParams: { latitude: string; longitude: string; name: string }
}) {
    const weatherResponse = await DAL.client.getWeatherData({
        latitudeParam: Number.parseFloat(searchParams.latitude),
        longitudeParam: Number.parseFloat(searchParams.longitude),
    })
    return (
        <Stack align="stretch" p={0}>
            <Container>
                <Title order={2} size={"4rem"}>
                    <Text
                        component="span"
                        inherit
                        variant="gradient"
                        gradient={{ from: "pink", to: "yellow" }}
                    >
                        {searchParams.name}
                    </Text>
                </Title>
            </Container>
            <Center>
                <DynamicAddToFavouritesButton location={searchParams} />
            </Center>
            <WeatherGrid weatherData={weatherResponse} />
            <Stack>
                <Title order={2} size={"2rem"}>
                    Temperaturen
                </Title>
                <LineChart
                    title="Temperature"
                    h={300}
                    data={weatherResponse.daily.time.map((item, idx) => ({
                        time: item.toLocaleString(),
                        temperature_min:
                            weatherResponse.daily.temperature_2m_min[
                                idx
                            ].toFixed(2),
                        temperature_max:
                            weatherResponse.daily.temperature_2m_max[
                                idx
                            ].toFixed(2),
                    }))}
                    dataKey="time"
                    series={[
                        {
                            name: "temperature_min",
                            color: "indigo.6",
                            label: "Min",
                        },
                        {
                            name: "temperature_max",
                            color: "teal.6",
                            label: "Max",
                        },
                    ]}
                    curveType="natural"
                    type="gradient"
                    gradientStops={[
                        { offset: 0, color: "red.6" },
                        { offset: 20, color: "orange.6" },
                        { offset: 40, color: "yellow.5" },
                        { offset: 70, color: "lime.5" },
                        { offset: 80, color: "cyan.5" },
                        { offset: 100, color: "blue.5" },
                    ]}
                />
            </Stack>
        </Stack>
    )
}
