import { useState } from "react";
import { CustomLogger } from "../../../helpers";

const customLogger = new CustomLogger();

export function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)

            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            customLogger.logError(`useLocalStorage: key${key}, initialValue${initialValue}`, error)
            return initialValue;
        }
    })

    const setValue = (value: any) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            customLogger.logError(`useLocalStorage: setValue ${value}`, error)
        }
    }

    return [storedValue, setValue]
}