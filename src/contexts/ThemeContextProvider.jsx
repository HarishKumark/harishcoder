import {React, useState, createContext} from 'react'
import { themeData } from '../data/themeData'

export const ThemeContext = createContext()


function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme)
    const value = { theme }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider