import React,{useState,createContext} from 'react';


export const CurrencyContext = createContext();

export const CurrencyContextProvider = props => {
    const [currencyValue, setCurrencyValue] = useState('USD');

    return(
        <CurrencyContext.Provider value={[currencyValue,setCurrencyValue]}>
            {props.children}
        </CurrencyContext.Provider>
    )
}