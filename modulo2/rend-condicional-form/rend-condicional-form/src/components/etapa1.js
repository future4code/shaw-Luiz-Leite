
import React from 'react';
import styledComponents from 'styled-components';

//display: flex ,justify content: center , flex direction : columum , aligne itens: center;
/*const Etapa1 {
   align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }*/

function Etapa1(props) {
    return (
        <div class="etapa1">
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <div>
                <p>1. Qual o seu nome?</p>
                <input type="text" name="username"></input>
            </div>
            <p>2. Qual sua idade?</p>
            <input type="text" name="username"></input>
            <div>
                <p>3. Qual o seu email?</p>
                <input type="text" name="username"></input>
            </div>
            <div>
                <p>4. Qual a sua escolaridade?</p>
                <select value="">
                    <option value="ensino médio inconpleto">Ensino médio incompleto
                    </option>
                    <option value="ensino médio completo">Ensino médio completo
                    </option>
                    <option value="ensino superior incompleto">Ensino superior incompleto
                    </option>
                    <option value="ensino superior completo">Ensino superior completo
                    </option>
                </select>
            </div>
            <button>Proxima Etapa</button>
        </div>
    )
}

export default Etapa1;