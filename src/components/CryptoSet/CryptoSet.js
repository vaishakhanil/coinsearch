import React,{useRef,useContext} from 'react';
import {CryptoContext} from '../../context/crypto-context';


/**
 * Set Cryptocurrency Code
 */
const CryptoSet = () => {
    const [cryptoValue,setCryptoValue] = useContext(CryptoContext);

    const set_crypto_value = (e) => {
        e.preventDefault()
        setCryptoValue(e.target.value)
    }

    return(
        <div>
            <button value="BTC" onClick={set_crypto_value}>BTC</button>
            <button value="ETH" onClick={set_crypto_value}>ETH</button>
            <button value="LTH" onClick={set_crypto_value}>LTH</button>
        </div>
    )
}

export default CryptoSet;