import React,{useState, useEffect, useContext, useRef} from 'react';
import {CurrencyContext} from '../../context/currency-context'
import {CryptoContext} from '../../context/crypto-context';


const CurrentPrice = () => {
    const [currencyValue] = useContext(CurrencyContext) //Context Provider [USD, EUR, GBP]
    const [cryptoValue] = useContext(CryptoContext); // Crypto Provider [BTC, ETH, LTH]

    const [queryValue, setQueryValue] = useState("BTC-USD");
    const [prices, setPrices] = useState("");

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
                setPrices(Number(data.price).toLocaleString())
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

    return(<div>
        {prices}
    </div>)
}


export default CurrentPrice;