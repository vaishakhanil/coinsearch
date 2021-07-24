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
        height: 10vh;

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

    const H1 = styled.h1`
        color: ${({theme}) => theme.text};
        font-family: 'Rajdhani';
        font-size: 1.5vw;
        margin-right:auto;
        padding-left: 2vw;
    `;

    const Dashboard = styled.div`
        width: 99%;
        height: 90%;
        display:flex;
    `

    const Heading = styled.div`
        width: 40%;
        display:flex;
        flex-direction:column;
    `;

    return(
        <Layout>
            <SideBar/>

            <Display>
                <Header>
                    <H1>coinsearch</H1>
                    <CurrencySet/>
                    <a href="https://vaishakhanil.github.io/" target="_blank"><Github/></a> 
                </Header>
                <Dashboard>
                    <Heading>
                        <MarketAssets/>
                        <CurrentPrice/> 
                    </Heading>
                   
                    {/* <HistoryGraph/> */}
                </Dashboard>
                
            </Display>
        </Layout>
    )
}
