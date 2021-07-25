import styled from 'styled-components';
import {FlexContainer, GlobalComponents} from '../../layout/GlobalComponents/GlobalComponents.styles';

/**
 * Used StockItemValue Component
 * @param {String} value - Value of the Component (High, Low)
 * @param {Object} theme
 * @returns Theme Color based on the value
 */
const valueColor = (value,theme) => {
    switch(value){
        case "high": return theme.high;
        case "low": return theme.low;
        default: return theme.text;
    }
}


export const PriceValue = styled.h3`
    font-size: 1.5vw;
    font-weight: 500;
    margin-left: 2vw;
    margin-top: 1vw;

    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        font-size: 4.25vw;
    }
`;

export const StockInfoContainer = styled(FlexContainer)`
    width: 100%;
    height: 100%;

    ${GlobalComponents.flexColumn};
    justify-content: space-evenly;
`;

export const StockItemContainer = styled(FlexContainer)`
    width: 80%;
    margin-left: 2vw;
    background: ${({theme}) => theme.lightBg};

    padding: 1vw 2vw;
    justify-content: space-between;
    align-items:center;
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        width: 60vw;
        padding: 6vw 4vw;
    }

`;

export const StockItemTitle = styled.span`
    font-size: 1.25vw;
    font-weight: bold;
    color: ${({theme}) => theme.fadeText};

    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        font-size: 3.25vw;
    }
`;

export const StockItemValue = styled.span`
    font-size: 1.75vw;
    font-weight: bold;

    color: ${({value,theme}) => valueColor(value,theme)};
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        font-size: 4.25vw;
    }
`;