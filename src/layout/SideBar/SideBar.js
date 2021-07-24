import React from 'react';
import styled from 'styled-components'

import {CryptoSet, ThemeSet} from '../../components';

const SideBarLayout = styled.div`
    height: 100vh;
    width: 6vw;
    background: ${({theme}) => theme.lightBg};
    position:relative;
    top:0;
    left:0;
    box-shadow: ${({theme}) =>  theme.dropShadow};

    display:flex;
    flex-direction: column;
    justify-content:center;
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        width: 20vw;
    }
    
`


export const SideBar = () => {
    return(
        <SideBarLayout>
            <CryptoSet/>
            <ThemeSet/>
        </SideBarLayout>
    )
}
