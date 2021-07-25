import React, {useState,useContext} from 'react';
import {ThemeContextValue} from '../../layout/ThemeToggle'
import {ReactComponent as Themer} from '../../assets/svg/Themer.svg';

import {Button} from './ThemeSet.styles'

const ThemeSet = () => {
    const [theme, setTheme] = useContext(ThemeContextValue);

    const toggle_theme = () => {
        (theme === "dark") ? setTheme("light") : setTheme("dark");
    }

    return(
        <Button onClick = {toggle_theme}><Themer/></Button>
    )
}

export default ThemeSet