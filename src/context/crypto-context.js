import React,{useState,createContext} from 'react';


export const CryptoContext = createContext();

export const CryptoContextProvider = props => {
    const [cryptoValue, setCryptoValue] = useState('BTC');
    
    return(
        <CryptoContext.Provider value={[cryptoValue,setCryptoValue]}>
            {props.children}
        </CryptoContext.Provider>
    )
}