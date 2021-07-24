import React, {useState, createContext} from 'react';
import {ThemeProvider} from 'styled-components';

import {GlobalStyles} from '../Global'
import {darkTheme,lightTheme} from '../Themes/Theme';


export const ThemeContextValue = createContext();

export const ThemeToggle = props => {
    const [theme,setTheme] = useState('dark');

    return(
        <ThemeContextValue.Provider value={[theme,setTheme]}>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <GlobalStyles/>
                {props.children}
            </ThemeProvider>
        </ThemeContextValue.Provider>
    )
}