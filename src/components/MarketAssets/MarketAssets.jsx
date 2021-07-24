import React, {useState, useEffect, useContext} from 'react';
import {CurrencyContext} from '../../context/currency-context'
import {CryptoContext} from '../../context/crypto-context';

import {base_url} from '../../utils/global_variables';

import {CurrencyInfoContainer, CurrencyTitle, CurrencyId} from './MarketAssets.styles';


import {ReactComponent as BTC} from '../../assets/svg/BTC.svg'
import {ReactComponent as EOS} from '../../assets/svg/EOS.svg'
import {ReactComponent as ETH} from '../../assets/svg/ETH.svg'
import {ReactComponent as XLM} from '../../assets/svg/stellar.svg'
import { cos } from 'prelude-ls';

/**
 * MarketAssets Component.
 * Websocket - wss://ws-feed.pro.coinbase.com
 * API - https://api.pro.coinbase.com/products
 * 
 * @DONE - Setup Websocket to connect into messari api & pull market assets data
 * 
 * @param {String} coin - Coin slug 
 * @returns JSX - Coin Slug, Coin Value, MCAP
 */
const MarketAssets = () => {
    const [currencyValue] = useContext(CurrencyContext) //Context Provider [USD, EUR, GBP]
    const [cryptoValue] = useContext(CryptoContext); // Crypto Provider [BTC, ETH, LTH]

    const [currencies, setCurrencies] = useState({
        id:'',
        name:'',
        details:{}
    });
    
    
    useEffect(() => {
        let items = [];
        const apiCall = async() => {
            await fetch(`${base_url}/currencies/${cryptoValue}`)
            .then((res) => res.json())
            .then((data) => (items = data))
            .catch((err) => console.log(err));
            
            console.log(items);
            setCurrencies({id:items.id, name: items.name, details: items.details});
            console.log(currencies)
        }

        apiCall()

    },[currencyValue,cryptoValue])

   
    const crypto_symbol = (data) => {
        console.log("infinite?")
        switch(data){
            case "BTC": return <BTC/>;
            case "EOS": return <EOS/>;
            case "ETH": return <ETH/>;
            case "XLM": return <XLM/>;
            default: return "#"
        }
    }


    return(
        <CurrencyInfoContainer>
            {crypto_symbol(currencies.id)}
            <CurrencyTitle>{(currencies.name).toUpperCase()}</CurrencyTitle>
            <CurrencyId>{(currencies.id).toUpperCase()} </CurrencyId>
        </CurrencyInfoContainer>
    )
}


export default MarketAssets;