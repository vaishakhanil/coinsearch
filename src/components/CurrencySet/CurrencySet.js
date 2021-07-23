import React,{useContext,useRef} from 'react';
import {CurrencyContext} from '../../context/currency-context';

/**
 * Set Currency Value
 * @returns 
 */
const CurrencySet = () => {
    const [currencyValue, setCurrencyValue] = useContext(CurrencyContext);
    const selectRef = useRef(null);

    const set_currency_value = () =>{
        setCurrencyValue(selectRef.current.value)
    }

    return(
        <select ref={selectRef} onChange={set_currency_value}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>
    )
}

export default CurrencySet


