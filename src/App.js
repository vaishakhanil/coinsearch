import React from 'react';
import './styles/App.css';
import {CurrencyContextProvider} from './context/currency-context';
import {CryptoContextProvider} from './context/crypto-context'

import {MarketAssets, CurrencySet, CurrentPrice, HistoryGraph} from './components';

import {ThemeToggle} from './layout/ThemeToggle'
import {SideBar} from './layout/SideBar'

const App = () => {

  return(
    <ThemeToggle>
    <CurrencyContextProvider>
      <CryptoContextProvider>
        <CurrencySet/>
        <MarketAssets/>

        <CurrentPrice/>

        <HistoryGraph/>

        <SideBar/>
      </CryptoContextProvider>
    </CurrencyContextProvider>
    </ThemeToggle>
  )
}

export default App;