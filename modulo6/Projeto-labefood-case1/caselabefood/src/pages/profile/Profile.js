import React from "react";
import { useProtectedPage } from "../../hooks/UseProctedPage";
import { Main,Perfil,Informacoes,PerfilPessoa,EnderecoPessoa,HistoricoCompras } from "./Styled";
import { BASE_URL } from "../../constants/BASE_URL";
import {useRequestData} from "../../hooks/UseRequestData"
import { goToProfileEdit } from "../../routes/Coordnator";
import { useNavigate } from "react-router-dom";

const Profile = () =>{

    useProtectedPage()

    const person = useRequestData({}, `${BASE_URL}/profile`)

    const navigate = useNavigate()

    console.log(person[0].user)


    return (
        <Main>
        <Perfil>Meu Perfil</Perfil>
        <Informacoes>
            <PerfilPessoa>
            <div>
                <p>{person[0].user && person [0].user.name}</p>
                <p>{person[0].user && person [0].user.email}</p>
                <p>{person[0].user && person [0].user.cpf}</p>
            </div>
            <div onClick={()=>goToProfileEdit(navigate,person[0].user.id)}>Editar</div>
            </PerfilPessoa>
            <EnderecoPessoa>
            <div>
                <h4>Endereço cadastrado</h4>
                <p>{person[0].user && person [0].user.address}</p>
            </div>
            <div>Editar</div>
            </EnderecoPessoa>
            <HistoricoCompras>compras</HistoricoCompras>
        </Informacoes>
        </Main>
    )
}
export default Profile