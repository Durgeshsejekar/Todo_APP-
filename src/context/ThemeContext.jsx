import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [dark , setDark] = useState(false)

    const changeTheme = () => {
        dark ? setDark(false) : setDark(true)
        console.log(dark)
    }


    return(
        <ThemeContext.Provider value={{changeTheme , dark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext