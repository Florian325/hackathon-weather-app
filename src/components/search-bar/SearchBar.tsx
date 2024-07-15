import { Autocomplete, ComboboxStringItem, Group, Text } from "@mantine/core"

import classes from "./SearchBar.module.css"
import { useDebouncedState } from "@mantine/hooks"
import { useEffect, useMemo, useRef, useState } from "react"
import { DAL } from "@/dal"
import { GeoData } from "@/dal/client/types/geoData"
import Link from "next/link"
import { useRouter } from "next/navigation"

const AutocompleteOption = ({ option }: { option: ComboboxStringItem }) => {
    const data: GeoData = JSON.parse(option.value)
    return (
        <Group gap="sm">
            <div>
                <Text size="md">{data.name}</Text>
                <Text size="xs">
                    {data.country}
                    {data.admin1 && <> / {data.admin1}</>}
                </Text>
            </div>
        </Group>
    )
}

export default function SearchBar() {
    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const [debauncedValue, setDebauncedValue] = useDebouncedState("", 300)
    const { data, status } = DAL.queries.useGeoDataQuery(debauncedValue)
    const isResult = useMemo(() => {
        try {
            JSON.parse(value)
            return true
        } catch {
            return false
        }
    }, [value])
    return (
        <Autocomplete
            className={classes.search}
            placeholder="Suche"
            radius={"md"}
            onOptionSubmit={(option) => {
                const data: GeoData = JSON.parse(option)
                router.push(
                    `/weather?latitude=${data.latitude}&longitude=${data.longitude}&name=${data.name}`
                )
            }}
            defaultValue={debauncedValue}
            value={isResult ? JSON.parse(value).name : value}
            onChange={(value) => {
                setDebauncedValue(value)
                setValue(value)
            }}
            renderOption={AutocompleteOption}
            data={
                status === "success" && data.results
                    ? data.results.map((item) => JSON.stringify(item))
                    : []
            }
        />
    )
}
