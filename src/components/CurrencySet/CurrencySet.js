import React,{useContext,useRef} from 'react';
import {CurrencyContext} from '../../context/currency-context';
import styled from 'styled-components';

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
        </select>
    )
}

export default CurrencySet


