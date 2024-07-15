import type { Metadata } from "next"
import "@mantine/core/styles.css"
import "@mantine/charts/styles.css"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import Shell from "@/components/shell"
import { ClientProviders } from "@/provider/ClientProviders"

export const metadata: Metadata = {
    title: "Wetter App",
    description: "A simple weather app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    <ClientProviders>
                        <Shell>{children}</Shell>
                    </ClientProviders>
                </MantineProvider>
            </body>
        </html>
    )
}
