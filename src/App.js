import React from 'react';
import './styles/App.css';
import {CurrencyContextProvider} from './context/currency-context';
import {CryptoContextProvider} from './context/crypto-context';

import {ThemeToggle} from './layout/ThemeToggle'

import {MainComponent} from './layout/MainComponent'

const App = () => {

  return(
    <ThemeToggle>
    <CurrencyContextProvider>
      <CryptoContextProvider>
        <MainComponent/>
      </CryptoContextProvider>
    </CurrencyContextProvider>
    </ThemeToggle>
  )
}

export default App;