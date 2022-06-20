
import styledComponents from 'styled-components';
import React from 'react';
import './App.css';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';

 

class App extends React.Component {
  state = {
    pagina: 1
  };



irParaProximaPagina = () => {
  
  this.setstate({pagina:this.state.pagina + 1})



}
  


  render() {
  let paginaAtual;
  switch (this.state.pagina) {
    case 1:
      paginaAtual = <Etapa1 />;
      break;
    case 2:
      paginaAtual = <Etapa2 />;
      break;
    case 3:
      paginaAtual = <Etapa3 />;
      break;
    case 4:
      paginaAtual = <Final/>;
      break;
    default:
      paginaAtual = <Final/>;
      break;
  }

  return (
    
      <>{paginaAtual}
        
        

      </>
    );
  }


 
};
export default App