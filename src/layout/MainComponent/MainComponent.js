import React from 'react';

import {SideBar} from '../SideBar'

import {MarketAssets, CurrencySet, CurrentPrice, HistoryGraph} from '../../components';

import {ReactComponent as Github} from '../../assets/svg/Github.svg';

import {Layout,Heading,AppName,Header,Display,Dashboard} from './MainComponent.styles';


export const MainComponent = () => {    
    return(
        <Layout>
            <SideBar/>

            <Display>
                
                <Header>
                    <AppName>coinsearch</AppName>
                    <CurrencySet/>
                    <a href="https://vaishakhanil.github.io/" target="_blank"><Github/></a> 
                </Header>
                
                <Dashboard>
                    <Heading>
                        <MarketAssets/>
                        <CurrentPrice/> 
                    </Heading>
                   
                    <HistoryGraph/>
                </Dashboard>
                
               <a href="https://docs.pro.coinbase.com/" target="_blank" rel="noreferrer noopener"><span className="credits">PERSONAL PROJECT BY VAISHAKH ANIL | DATA FROM COINBASE API</span></a>
            </Display>
        </Layout>
    )
}
