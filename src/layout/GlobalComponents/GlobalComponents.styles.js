import styled, {css} from 'styled-components';

export const GlobalComponents = {
    flexColumn:  css` flex-direction: column;`,
    flexRow: css`flex-direction: row;`,
    justifyCenter: css`justify-content: center;`,
    alignCenter: css`align-items:center;`,
}

export const FlexContainer = styled.div`
    display:flex;
`;