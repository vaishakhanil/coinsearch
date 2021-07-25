import React,{useState, useEffect, useContext, useRef} from 'react';
import {CurrencyContext} from '../../context/currency-context'
import {CryptoContext} from '../../context/crypto-context';

import {PriceValue, StockInfoContainer, StockItemContainer, StockItemTitle, StockItemValue} from './CurrentPrice.styles'

const CurrentPrice = () => {
    const [currencyValue] = useContext(CurrencyContext) //Context Provider [USD, EUR, GBP]
    const [cryptoValue] = useContext(CryptoContext); // Crypto Provider [BTC, ETH, LTH]

    const [queryValue, setQueryValue] = useState("BTC-USD");
    const [prices, setPrices] = useState("");
    const [marketInfo, setMarketInfo] = useState({});

    let subscribeMessage = {
        type: "subscribe",
        product_ids: [queryValue],
        channels: ["ticker"]
    }
    
    let unsubscribeMessage = {
        type: "unsubscribe",
        product_ids: [queryValue],
        channels: ["ticker"]
    }


    /**
     * Connecting to Coinbase Websocket
     */
    const ws = useRef(null);
    useEffect(() => {
        ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")

        /** Inital Subscribe */
        ws.current.addEventListener("open",() => {
            ws.current.send(JSON.stringify(subscribeMessage))
        })

        console.log(ws.current.readyState)

    },[])

    /**
     * messages from websocket
     */
    useEffect(() => {
        if(ws.current.readyState === 1){
            console.log("connected")
            ws.current.send(JSON.stringify(subscribeMessage))
        }

        ws.current.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if(data.type !== "ticker"){
                return;
            }
            if(data.product_id === queryValue){
                console.log(data);
                setPrices(Number(data.price).toLocaleString());
                setMarketInfo(data);
            }
        }

        return function cleanup(){
            console.log("unsubscribe")
            ws.current.send(JSON.stringify(unsubscribeMessage))
        }
    },[queryValue]);


    useEffect(()=>{
        if(ws.current.readyState === 1){   
            setQueryValue(`${cryptoValue}-${currencyValue}`)
        }
    },[cryptoValue,currencyValue])

    useEffect(()=> {
          /** Cleanup Unsubscibe & close connection */
          return function cleanup(){
            console.log("Closing Connection")
            ws.current.close();
        }
    },[])


    return(
    <>
    <PriceValue>
        {(currencyValue === "USD") ? "$" : "€"} {prices}
    </PriceValue>

    <StockInfoContainer>
        <StockItemContainer>
            <StockItemTitle>BEST BID</StockItemTitle> 
            <StockItemValue>{Number(marketInfo.best_bid).toLocaleString()}</StockItemValue>
        </StockItemContainer>

        
        <StockItemContainer>
            <StockItemTitle>HIGH 24H</StockItemTitle> 
            <StockItemValue value="high">{Number(marketInfo.high_24h).toLocaleString()}</StockItemValue>
        </StockItemContainer>

        
        <StockItemContainer>
            <StockItemTitle>LOW 24H</StockItemTitle> 
            <StockItemValue value="low">{Number(marketInfo.low_24h).toLocaleString()}</StockItemValue>
        </StockItemContainer>


        <StockItemContainer>
            <StockItemTitle>OPEN 24H</StockItemTitle> 
            <StockItemValue>{Number(marketInfo.open_24h).toLocaleString()}</StockItemValue>
        </StockItemContainer>

        
        <StockItemContainer>
            <StockItemTitle>VOLUME 24H</StockItemTitle> 
            <StockItemValue>{Number(marketInfo.volume_24h).toLocaleString()}</StockItemValue>
        </StockItemContainer>

        
        <StockItemContainer>
             <StockItemTitle>VOLUME 30D</StockItemTitle> 
             <StockItemValue>{Number(marketInfo.volume_30d).toLocaleString()}</StockItemValue>
        </StockItemContainer>

    </StockInfoContainer>
    </>
    )
}


export default CurrentPrice;