"use client"
import { getWeatherDescription } from "@/utils/weather-description"
import { SimpleGrid, Grid, rem, Box, Center, Title } from "@mantine/core"

const PRIMARY_COL_HEIGHT = rem(300)

export default function WeatherGrid({
    weatherData,
}: {
    weatherData: WeatherData
}) {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

    return (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Box
                h={PRIMARY_COL_HEIGHT}
                p="md"
                style={{
                    borderRadius: "var(--mantine-radius-lg)",
                    alignContent: "center",
                    backgroundImage: `linear-gradient(40deg, var(--mantine-color-teal-filled), var(--mantine-color-cyan-filled))`,
                }}
            >
                <Center>
                    <Title
                        order={3}
                        size={"5rem"}
                        style={{
                            color: "var(--mantine-color-white)",
                        }}
                    >
                        {weatherData.current.temperature_2m.toFixed(2)}°C
                    </Title>
                </Center>
            </Box>
            <Grid gutter="md">
                <Grid.Col>
                    <Box
                        h={SECONDARY_COL_HEIGHT}
                        p="md"
                        style={{
                            borderRadius: "var(--mantine-radius-lg)",
                            alignContent: "center",
                            backgroundImage: `linear-gradient(40deg, var(--mantine-color-red-filled), var(--mantine-color-orange-filled))`,
                        }}
                    >
                        <Center>
                            <Title
                                order={3}
                                style={{
                                    color: "var(--mantine-color-white)",
                                }}
                            >
                                Niederschlag:{" "}
                                {weatherData.current.precipitation}
                                mm
                            </Title>
                        </Center>
                    </Box>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Box
                        h={SECONDARY_COL_HEIGHT}
                        p="md"
                        style={{
                            borderRadius: "var(--mantine-radius-lg)",
                            alignContent: "center",
                            backgroundImage: `linear-gradient(40deg, var(--mantine-color-grape-filled), var(--mantine-color-violet-filled))`,
                        }}
                    >
                        <Center>
                            <Title
                                order={3}
                                style={{
                                    color: "var(--mantine-color-white)",
                                }}
                            >
                                {weatherData.current.is_day ? "Tag" : "Nacht"}
                            </Title>
                        </Center>
                    </Box>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Box
                        h={SECONDARY_COL_HEIGHT}
                        p="md"
                        style={{
                            borderRadius: "var(--mantine-radius-lg)",
                            alignContent: "center",
                            backgroundImage: `linear-gradient(40deg, var(--mantine-color-lime-filled), var(--mantine-color-indigo-filled))`,
                        }}
                    >
                        <Center>
                            <Title
                                order={3}
                                style={{
                                    color: "var(--mantine-color-white)",
                                }}
                            >
                                {getWeatherDescription(
                                    weatherData.current.weather_code
                                )}
                            </Title>
                        </Center>
                    </Box>
                </Grid.Col>
            </Grid>
        </SimpleGrid>
    )
}
