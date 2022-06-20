import React from 'react';
import styledComponents from 'styled-components';


function Etapa3(props) {
    return (
        <div >
            <h1>ETAPA 1 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <div>
                <p>1. Porque você não terminou um curso de graudação?</p>
            </div>
            <div>
                <p>2. Você fez algum curso complementar?</p>
                <select value="">
                    <option value="nenhum">nenhum
                    </option>
                    <option value="curso técnico">Curso técnico
                    </option>
                    <option value="Inglês">Inglês
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Etapa3;