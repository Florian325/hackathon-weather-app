"use client"

import { Group, Title, Burger, Text, Center } from "@mantine/core"
import classes from "./Navbar.module.css"
import { useFavouriteLocations } from "@/hooks/use-favourite-locatiosn"
import Link from "next/link"
import ColorScheme from "./ColorScheme"

export function Navbar({
    opened,
    toggle,
}: {
    opened: boolean
    toggle: () => void
}) {
    const { favouriteLocations } = useFavouriteLocations()

    return (
        <div className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        hiddenFrom="sm"
                    />
                    <Title order={1} className={classes.title}>
                        Wetter App
                    </Title>
                </Group>
                <Text>Favouriten</Text>
                {favouriteLocations.map((location, idx) => (
                    <Link
                        className={classes.link}
                        href={`/weather?latitude=${location.latitude}&longitude=${location.longitude}&name=${location.name}`}
                        key={idx}
                    >
                        {location.name}
                    </Link>
                ))}
            </div>

            <div className={classes.footer}>
                <Center>
                    <ColorScheme />
                </Center>
            </div>
        </div>
    )
}
