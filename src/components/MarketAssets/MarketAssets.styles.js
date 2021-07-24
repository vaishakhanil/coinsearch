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
    }
`;

export const CurrencyTitle = styled.h2`
    font-size: 2.5vw;
    padding: 0 0.5vw;
`;

export const CurrencyId = styled.span`
    font-weight: bold;
    font-size: 1.25vw;
`;
