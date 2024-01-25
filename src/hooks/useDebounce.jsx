import {useEffect, useState} from "react";


export const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            // console.log('setting new timeout')
            setDebouncedValue(value)
        }, delay)

        return () => {
            // console.log('clearing the timeout')
            clearTimeout(id)
        }
    }, [value, delay])
    return debounceValue
}