import React, { useState } from "react";
import {CartConfig, InfoProfile, Main,MainCart } from "../cart/Styled"
import {useRequestData} from "../../hooks/UseRequestData"
import {BASE_URL} from "../../constants/BASE_URL"

const Cart = () =>{

    const profile = useRequestData ({}, `${BASE_URL}/profile`)
    const [payment,setPayment] = useState ([])
    const [paymentMethod, setPaymenthMethod] = useState({
        'money': false,
        'creditcard':false
    })

    const mockData = [...
]

const onChangePayment = (event) => {
    const newCheck = {...paymentMethod}
    newCheck [event.target.name] = event.target.checked

    const result = Object.keys(newCheck).filter((pay)=> {
        if (newCheck[pay]) {
            return [pay,... payment]
        }
    })
    setPayment(result)
    setPaymentMenthod(newCheck)


}

    console.log (profile[0].user)


    return (
        <Main>
        <MainCart>
        <p>meu carrinho</p>
        </MainCart>
        <CartConfig>
            <InfoProfile>
            <p>Endereço de Entrega</p>
            <p>{profile[0].user && profile[0].user.address}</p>
            </InfoProfile>
            <div>
            <p>carrinho vazio</p>

            </div>
            <div>
            <p> Frete R$ 00,00</p>
            <div>
                <p>SubTotal</p>
                <p>R$ 00,00</p>
            </div>
            <h1>Forma de pagamento</h1>
            <form>
            <label>dinheiro</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label></label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <button>Confirmar</button>
            
            </form>

            </div>
        </CartConfig>
        </Main>
    )
}
export default Cart