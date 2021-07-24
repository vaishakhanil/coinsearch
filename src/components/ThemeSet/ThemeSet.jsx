import React, {useState,useContext} from 'react';
import {ThemeContextValue} from '../../layout/ThemeToggle'

const ThemeSet = () => {
    const [theme, setTheme] = useContext(ThemeContextValue);

    const toggle_theme = () => {
        (theme === "dark") ? setTheme("light") : setTheme("dark");
    }

    return(
        <button onClick = {toggle_theme}>toggle</button>
    )
}

export default ThemeSet