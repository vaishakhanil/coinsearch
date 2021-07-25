import React, {useContext,useState,useEffect} from 'react';
import {base_url} from '../../utils/global_variables'

import {CurrencyContext} from '../../context/currency-context'
import {CryptoContext} from '../../context/crypto-context';

import {format_data} from '../../utils/format_data';

import {GraphWrapper} from './HistoryGraph.styles';

import { Line } from "react-chartjs-2";



/**
 * 
 * @TODO  Add D3.js - candle graphs / inline graphs
 * @returns JSX - Historical Graph
 */
const HistoryGraph = () => {
    const [currencyValue] = useContext(CurrencyContext) //Context Provider [USD, EUR, GBP]
    const [cryptoValue] = useContext(CryptoContext); // Crypto Provider [BTC, ETH, LTH]

    const [cachedData, setCachedData] = useState([]);
    const [plotData, setPlotData] = useState({});


    /**
     * To reduce / prevent polling of historical data of same value multiple times 
     */
    useEffect(() => {

        const getHistoricalData = async() =>{
           
            if(cachedData.find(data => data.name === `${cryptoValue}-${currencyValue}`) !== undefined){
                let dataValue = cachedData.filter((data) => data.name === `${cryptoValue}-${currencyValue}`)
                console.log(dataValue[0])
                setPlotData(dataValue[0])

            } else {
                let items = []
                console.log("Querying data")
                await fetch(`${base_url}/products/${cryptoValue}-${currencyValue}/candles?granularity=86400`)
                .then((res) => res.json())
                .then((data) => (items = data))
                .catch((error) => console.error(error))
                let formattedData = format_data(items,`${cryptoValue}-${currencyValue}`);
                console.log(formattedData);
                setCachedData([...cachedData, formattedData])
               setPlotData(formattedData)
            }
        }

        getHistoricalData();
        
    },[currencyValue,cryptoValue])


    return(
        <GraphWrapper>
            <span>Historical Graph</span>
            <Line data={plotData}/>
        </GraphWrapper>
    )
}

export default HistoryGraph;