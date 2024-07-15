"use client"

import { useState, useEffect } from "react"

function getLocalStorage(key: string, initial: unknown) {
    // @ts-ignore TS2345
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initial instanceof Function) return initial()
    return initial
}

export function useLocalStorageState<S>(
    key: string,
    initial: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] {
    const [value, setValue] = useState<S>(() => getLocalStorage(key, initial))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return [value, setValue]
}
