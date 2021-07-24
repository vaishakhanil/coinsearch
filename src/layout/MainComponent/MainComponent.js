import React from 'react';
import styled from 'styled-components';

import {SideBar} from '../SideBar'

import {MarketAssets, CurrencySet, CurrentPrice, HistoryGraph} from '../../components';

import {ReactComponent as Github} from '../../assets/svg/Github.svg';

export const MainComponent = () => {

    const Layout = styled.div`
        width: 100vw;
        height: 100vh;
        display:flex;
        overflow: hidden;
    `;

    const Display = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
    `;

    const Header = styled.header`
        width: 100%;
        height: 6vh;

        display:flex;
        justify-content:flex-end;
        align-items:center;

        & > * {
            margin-right: 4vw;
        }
        & > a > svg{
            fill: ${({theme}) => theme.text};
        }
    `;
    return(
        <Layout>
            <SideBar/>

            <Display>
                <Header>
                    <CurrencySet/>
                    <a href="https://vaishakhanil.github.io/" target="_blank"><Github/></a> 
                </Header>
                
                <MarketAssets/>
                {/* <CurrentPrice/> */}
                
                {/* <HistoryGraph/> */}
            </Display>
        </Layout>
    )
}
