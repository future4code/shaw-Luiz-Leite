import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Container, Header, Div, List, FooterDiv} from './../TeladeMatches/styled'



export default function TelaMatches  () {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-marcelo/matches"
    axios
      .get(url)
      .then((res) =>{
      console.log (res.data) 
      setMatches(res.data.matches);
  })
      .catch((err) => console.log(err.response));
  };

  const clear = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-marcelo/clear"
    axios
      
      .get(url)
      .then(() => getMatches())
      .catch((err) => console.log(err));
  };

  const seeMatches = matches.map((person) => {
    return (
      <List>
        <img src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </List>
    );
  });

  return (
      <div>
        <Container>
            <Header>
                <img src={''} />
                <a><img src={''} /></a>
            </Header>
            <Div>
                { seeMatches }
            </Div>
            </Container>
            <FooterDiv>
                <a onClick={ clear }><img src={''}/></a>
            </FooterDiv>
    </div>
  );
};

