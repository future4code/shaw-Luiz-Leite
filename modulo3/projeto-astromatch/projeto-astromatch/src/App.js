import React,{ useState } from 'react'
import TelaInicial from './Telainicial/TelaInicial'
import TelaMatches from './TeladeMatches/TelaMatches'
import styled from 'styled-components'


const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


function App() {
  const [pages, setpages] = useState(true)

  const changePages = () => {
    setpages(!pages)
  }

  return (
    <AppDiv>
      {pages ?(
        <TelaInicial changePages={changePages}/>
      ) : (
        <TelaMatches changePages={changePages}/>
      )
    }
    </AppDiv>
  );
}

export default App;