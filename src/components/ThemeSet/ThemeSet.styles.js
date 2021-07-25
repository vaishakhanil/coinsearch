import styled from 'styled-components';


export const Button = styled.button`
    position: fixed;
    bottom: 0;
    align-self: center;
    margin-bottom: 2vw;
    border:0;
    background: ${({theme}) => theme.lightBg};

    & > svg {
        width: 2vw;
        height: 2vw;
        fill: ${({theme}) => theme.toggle};
        pointer-events: none;
        transition: all 250ms ease-in;
    }
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
        & > svg {
            width: 6vw;
            height: 6vw;
        }
    }
`
