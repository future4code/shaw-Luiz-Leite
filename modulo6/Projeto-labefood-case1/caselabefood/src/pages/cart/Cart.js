import React, { useState } from "react";
import {CartConfig, CartInfo, EmptyCart, Form, Freight, InfoProfile, InfoRestaurant, Main, Payment, Total } from "../cart/Styled"
import {useRequestData} from "../../hooks/UseRequestData"
import {BASE_URL} from "../../constants/BASE_URL"
import Header from "../../components/header/Header";
import useProtectedPage from "../../hooks/UseProctedPage"

const Cart = () =>{

    useProtectedPage()

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
    setPaymenthMethod(newCheck)


}

    console.log (payment)


    return (
        <Main>
        <Header title={"Meu Carrinho"} back/>
        <CartConfig>
            <InfoProfile>
            <p>Endereço de Entrega</p>
            <p>{profile[0].user && profile[0].user.address}</p>
            </InfoProfile>
            <InfoRestaurant>
            <p>nome do restaurante</p>
            <p>Rua do restaurante</p>
            <p>30 - 45 min</p>

            </InfoRestaurant>
            <CartInfo>
            {mockData.leght>0?mockData.map((data)=>{
                return (
                    <CardCart
                    name={data.name}
                    price={data.price}
                    photoUrl={data.amount}
                    description={data.description}
                    />
                )
            }) : <EmptyCart>Carrinho vazio</EmptyCart>}
            </CartInfo>
            <Payment>
                <Freight>frete {new Intl.NumberFormat('pt-Br',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(6)}
                </Freight>
                <Total>
                    <p>Subtotal</p>
                    <p>{new Intl.NumberFormat('pt-Br',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(10)}</p>
                </Total>
                <h1>Forma de pagamento</h1>
                <hr/>
                <Form>
                    {Object.keys(paymentMethod).map((key) =>{
                        const checked = paymentMethod[key]
                        return (
                            <div key={key}>
                            <input
                                checked={checked}
                                name={key}
                                id={key}
                                type={'checkbox'}
                                onChange={onChangePayment}
                            />
                            <label>{key}</label>
                            </div>
                        )
                    })}
                    <Button>Confirmar</Button>
                </Form>
            </Payment>
        </CartConfig>
        </Main>
    )
}
export default Cart