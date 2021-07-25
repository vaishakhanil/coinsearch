import styled from 'styled-components';

export const GraphWrapper = styled.div`
    width: 60vw;
    height: 40vw;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    
    @media only screen and (min-width: 300px) and (max-width: 500px){
      display: none;
    }
`;
