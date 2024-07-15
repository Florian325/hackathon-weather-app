"use client"
import dynamic from "next/dynamic"
import { AppShell, Burger } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Header from "../header"

const DynamicNavbar = dynamic(() => import("../navbar"), {
    ssr: false,
})

export default function Shell({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            padding="md"
            layout="alt"
            styles={{
                navbar: { borderRight: "0" },
                header: { borderBottom: "0" },
            }}
        >
            <AppShell.Header p="sm">
                {/* <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                /> */}
                <Header opened={opened} toggle={toggle} />
            </AppShell.Header>

            <AppShell.Navbar p="sm">
                <DynamicNavbar opened={opened} toggle={toggle} />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
