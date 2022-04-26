import React from 'react';
import { CreateTripContainer } from "./styled"

class CreateTripPage extends React.Component {


    render() {
        return (
            <CreateTripContainer>
                <h1>Criar Viagem</h1>
                <input placeholder="Nome" />
                <select >
                    <option>Escolha Planeta</option>
                    <option>viagem1</option>
                    <option>viagem2</option>
                    <option>viagem3</option>
                    <option>viagem4</option>
                </select>
                <input placeholder="Prazo do Serviço" type="date" />
                <input placeholder="Descrição" />
                <input placeholder="Duração em dias" />
                <button>Voltar</button>
                <button>Criar</button>
            </CreateTripContainer>
        )
    }
}

export default CreateTripPage