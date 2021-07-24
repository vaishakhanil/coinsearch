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
            width: 2vw;
            height: 2vw;
            fill: ${({theme}) => theme.toggle};
            pointer-events: none;
            transition: all 250ms ease-in;
        }
        @media only screen and (min-width: 300px) and (max-width: 500px){
            & > svg {
                width: 6vw;
                height: 6vw;
            }
        }
    `

    return(
        <Button onClick = {toggle_theme}><Themer/></Button>
    )
}

export default ThemeSet