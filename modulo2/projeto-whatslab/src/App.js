import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Containerwhats = styled.div`
border: 1px solid black;
background-color: black;
width: 400px;
height: 100vh;

`



function App() {
  return (
    <MainContainer>
      <Containerwhats>
      <h1>bem-vindo</h1>
      <p>whats</p>
      </Containerwhats>
    </MainContainer>
  );
}

export default App;

