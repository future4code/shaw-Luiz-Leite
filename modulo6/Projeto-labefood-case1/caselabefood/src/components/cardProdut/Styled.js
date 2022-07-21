import styled from "styled-components"

export const ContainerCardProdut = styled.div `
width: 100%;
margin: 0.5rem 0;
display: flex;
border-radius: 7px;
`


export const ImageProduct = styled.img `
width: 6rem;
height: 7rem;
border-radius: 7px 7px 0 0 ;
`
export const QuantityProduct = styled.div `
width: 2.063rem;
justify-content: center;
align-items: center;
display: flex;
border: solid 1px red;
height: 2.063rem;

`
export const  BoxInform= styled.div `

`
export const NameProduct = styled.h3 `
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: red;
padding-bottom: 0.25rem;
`
export const  BoxNameQuantity = styled.div `
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 1rem 0rem 0 1rem;
flex-grow:1
`
export const InformDescription = styled.p `
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: gray;
padding: 0.25rem 0;
flex-grow: 1;

`
export const BoxInformPriceButton = styled.div `
display: flex;
justify-content: space-between;
`
export const InformPrice = styled.p`
`

export const InformButton = styled.button`
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: white;
outline: 0;
border: 1px black solid;
`