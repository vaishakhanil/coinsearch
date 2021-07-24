import React, {useState,useContext} from 'react';
import {ThemeContextValue} from '../../layout/ThemeToggle'
import styled from 'styled-components';
import {ReactComponent as Themer} from '../../assets/svg/Themer.svg';

const ThemeSet = () => {
    const [theme, setTheme] = useContext(ThemeContextValue);

    const toggle_theme = () => {
        (theme === "dark") ? setTheme("light") : setTheme("dark");
    }

    const Button = styled.button`
        position: fixed;
        bottom: 0;
        align-self: center;
        margin-bottom: 2vw;
        border:0;
        background: ${({theme}) => theme.lightBg};

        & > svg {
            fill: ${({theme}) => theme.toggle};
            pointer-events: none;
            transition: all 250ms ease-in;
        }
    `

    return(
        <Button onClick = {toggle_theme}><Themer/></Button>
    )
}

export default ThemeSet