import React from "react";
import { useProtectedPage } from "../../hooks/UseProctedPage";
import { Main,Perfil,Informacoes,PerfilPessoa,EnderecoPessoa,HistoricoCompras } from "./Styled";
import { BASE_URL } from "../../constants/BASE_URL";
import {useRequestData} from "../../hooks/UseRequestData"
import { goToProfileEdit , goToAdressEdit} from "../../routes/Coordnator";
import { useNavigate } from "react-router-dom";
import CardOrderHistory from "../../components/cardOrderHistory"

const Profile = () =>{

    useProtectedPage()

    const person = useRequestData({}, `${BASE_URL}/profile`)
    const order = useRequestData([],`${BASE_URL}/orders/history`)

    console.log (order[0].orders)


    const navigate = useNavigate()


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
            <div onClick={()=>goToAdressEdit(navigate,person[0].user.id)}>Editar</div>
            </EnderecoPessoa>
            <HistoricoCompras>

            {order[0].orders && order[0].orders.lenght > 0 ? order[0].orders && order[0].orders.map((order) => {
                console.log(order)
                return (
                    <CardOrderHistory
                        restaurantName={order.restaurantName}
                        totalPrice={order.totalPrice}
                        craetedAt={order.createdAt}
                    />
                )
            }):<p>voce não realizou nenhum pedido</p>}
        
            </HistoricoCompras>
        </Informacoes>
        </Main>
    )

}
export default Profile