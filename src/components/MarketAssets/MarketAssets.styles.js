import styled from 'styled-components';
import {FlexContainer,GlobalComponents} from '../../layout/GlobalComponents/GlobalComponents.styles'

export const CurrencyInfoContainer = styled(FlexContainer)`
    margin-left: 1vw;
    margin-top: 1vw;
    ${GlobalComponents.alignCenter}

    & > svg {
        width: 4vw;
        height: 4vw;
        fill: ${({theme}) => theme.text};
        @media only screen and (min-width: 300px) and (max-width: 500px){
            width: 8vw;
            height: 8vw;
        }
    }
`;

export const CurrencyTitle = styled.h2`
    font-size: 2.5vw;
    padding: 0 0.5vw;
    @media only screen and (min-width: 300px) and (max-width: 500px){
        font-size: 7vw;
    }
`;

export const CurrencyId = styled.span`
    font-weight: bold;
    font-size: 1.25vw;
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        font-size: 2.25vw;
    }
`;
