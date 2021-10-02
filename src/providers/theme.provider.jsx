import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../commons/theme";


const ThemeContext = createContext(LightTheme)

export const ThemeProvider = ({children}) => {

    // Current Color Scheme
    const colorScheme = useColorScheme()

    // Current theme
    const [theme, setTheme] = useState(LightTheme)

    // Changing theme
    useEffect(() => {
        console.log('Changed color scheme to: ', colorScheme);
        setTheme(colorScheme === 'light' ? LightTheme : DarkTheme)
    },[colorScheme])

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom hook to use the current theme
// Must be used inside a ThemeProvider
export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context){
        throw Error('You must use useTheme inside a ThemeProvider')
    }

    return context
}