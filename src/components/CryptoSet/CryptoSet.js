import React,{useContext} from 'react';
import {CryptoContext} from '../../context/crypto-context';
import {ReactComponent as Stellar} from '../../assets/svg/stellar.svg';
import {ReactComponent as EOS} from '../../assets/svg/EOS.svg';
import {ReactComponent as BTC} from '../../assets/svg/BTC.svg';
import {ReactComponent as ETH} from '../../assets/svg/ETH.svg';

import styled from 'styled-components';



/**
 * Set Cryptocurrency Code
 */
const CryptoSet = () => {
    const [cryptoValue,setCryptoValue] = useContext(CryptoContext);

    const set_crypto_value = (e) => {
        e.preventDefault()
        setCryptoValue(e.target.value)
    }

    const Button = styled.button`
        border:0;
        background: ${({theme}) => theme.lightBg};

        & > svg {
            width: 2vw;
            height: 2vw;
            fill: ${({theme}) => theme.text};
            pointer-events: none;
            transition: all 250ms ease-in;
        }

        &:hover{
            & > svg { 
                fill: ${({theme}) => theme.toggle};
            }
        }

        @media only screen and (min-width: 300px) and (max-width: 500px){
            & > svg {
                width: 6vw;
                height: 6vw;
            }
        }
    `;


    const ButtonContainer = styled.div`
        height: 50vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-around;
    `;

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