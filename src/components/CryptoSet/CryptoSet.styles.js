import styled from 'styled-components';

export const Button = styled.button`
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


export const ButtonContainer = styled.div`
    height: 50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
`;