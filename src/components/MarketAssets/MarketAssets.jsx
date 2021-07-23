import React, {useState, useEffect, useContext} from 'react';
import {CurrencyContext} from '../../context/currency-context'
import {CryptoContext} from '../../context/crypto-context';


/**
 * MarketAssets Component.
 * Websocket - wss://ws-feed.pro.coinbase.com
 * API - https://api.pro.coinbase.com/products
 * 
 * @TODO - Setup Websocket to connect into messari api & pull market assets data
 * 
 * @param {String} coin - Coin slug 
 * @returns JSX - Coin Slug, Coin Value, MCAP
 */
const MarketAssets = () => {
    const [currencyValue] = useContext(CurrencyContext) //Context Provider [USD, EUR, GBP]
    const [cryptoValue] = useContext(CryptoContext); // Crypto Provider [BTC, ETH, LTH]

    const [currencies, setCurrencies] = useState([]);
    const url = 'https://api.pro.coinbase.com';
    
    useEffect(() => {
        let items = [];
        const apiCall = async() => {
            await fetch(`${url}/products/BTC-${currencyValue}/stats`)
            .then((res) => res.json())
            .then((data) => (items = data))
            .catch((err) => console.log(err));
            
            setCurrencies(items);
            console.log(items)
        }

        apiCall()
    },[currencyValue])



    return(
        <div>
            {/* {currencies.map(item => (<div>{item.volume} = {item.open}</div>))} */}
            {currencies.volume} = {Number(currencies.open).toLocaleString()} <br/>
            {cryptoValue}
        </div>
    )
}


export default MarketAssets;