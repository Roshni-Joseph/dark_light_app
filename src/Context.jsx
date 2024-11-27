import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [currentTheme,toggletheme] = useState('light');

    changeTheme = () => {
        if (currentTheme === 'light') {
            toggletheme('dark');
        }
        else{
            toggletheme('light')
        }
    }

    return(
        <ThemeContext.Provider value={{currentTheme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
