import React from 'react';
import './styles/App.css';
import {CurrencyContextProvider} from './context/currency-context';
import {CryptoContextProvider} from './context/crypto-context'

import {MarketAssets, CurrencySet, CryptoSet, CurrentPrice, HistoryGraph} from './components';

const App = () => {

  return(
    <CurrencyContextProvider>
      <CryptoContextProvider>
        <CurrencySet/>
        <MarketAssets/>
        <CryptoSet/>

        {/* <CurrentPrice/> */}

        <HistoryGraph/>
      </CryptoContextProvider>
    </CurrencyContextProvider>
  )
}

export default App;