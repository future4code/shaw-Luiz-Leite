import React from 'react';
import { ApplicationContainer } from "./styled"

class ApplicationFormPage extends React.Component {


    render() {
        return (
            <ApplicationContainer>
                <h1>Inscreva - se para uma viagem</h1>
                <select >
                    <option>Escolha uma viagem</option>
                    <option>viagem1</option>
                    <option>viagem2</option>
                    <option>viagem3</option>
                    <option>viagem4</option>
                </select>
                <input placeholder="Nome" />
                <input placeholder="Idade" />
                <input placeholder="Texto de candidatura" />
                <input placeholder="Profissão" />
                <select >
                    <option>Escolha um país</option>
                    <option>Brazil</option>
                    <option>Estados unidos</option>
                    <option>México</option>
                    <option>França</option>
                </select>
                <button>Voltar</button>
                <button>Enviar</button>
            </ApplicationContainer>
        )
    }
}

export default ApplicationFormPage