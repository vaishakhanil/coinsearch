import React,{useContext} from 'react';
import {CryptoContext} from '../../context/crypto-context';
import {ReactComponent as Stellar} from '../../assets/svg/stellar.svg';
import {ReactComponent as EOS} from '../../assets/svg/EOS.svg';
import {ReactComponent as BTC} from '../../assets/svg/BTC.svg';
import {ReactComponent as ETH} from '../../assets/svg/ETH.svg';

import {Button,ButtonContainer} from './CryptoSet.styles';

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
        <ButtonContainer>
            <Button value="BTC" onClick={set_crypto_value}><BTC/></Button>
            <Button value="ETH" onClick={set_crypto_value}><ETH/></Button>
            <Button value="XLM" onClick={set_crypto_value}> <Stellar/> </Button>
            <Button value="EOS" onClick={set_crypto_value}><EOS/></Button>
        </ButtonContainer>
    )
}

export default CryptoSet;