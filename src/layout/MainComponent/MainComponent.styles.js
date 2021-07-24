import styled from 'styled-components';
import {FlexContainer,GlobalComponents} from '../GlobalComponents/GlobalComponents.styles';

const Layout = styled(FlexContainer)`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;


const Display = styled.div`
position: relative;
width: 100%;
height: 100%;
`;

const Header = styled(FlexContainer)`
    width: 100%;
    height: 10vh;

    justify-content: flex-end;
    ${GlobalComponents.alignCenter}

    
    & > * {
        margin-right: 4vw;
    }
    & > a > svg{
        fill: ${({theme}) => theme.text};
    }
`;



const Dashboard = styled(FlexContainer)`
    width: 99%;
    height: 90%;

    @media only screen and (min-width: 300px) and (max-width: 500px){
        width: 100%;
        height: 100%;

        ${GlobalComponents.flexColumn};
        ${GlobalComponents.alignCenter};
    }
`

const Heading = styled(FlexContainer)`
    width: 40%;
    ${GlobalComponents.flexColumn};
`;

const AppName = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 1.5vw;
    margin-right:auto;
    padding-left: 2vw;
`;

export {Layout,Heading, AppName,Header,Display,Dashboard}