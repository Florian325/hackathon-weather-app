import {
    Autocomplete,
    Group,
    Burger,
    rem,
    AutocompleteProps,
    Text,
    ComboboxStringItem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import classes from "./Header.module.css"
import SearchBar from "../search-bar"

export function Header({
    opened,
    toggle,
}: Readonly<{
    opened: boolean
    toggle: () => void
}>) {
    // const [opened, { toggle }] = useDisclosure(false)

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </Group>
                <SearchBar />
            </div>
        </header>
    )
}
