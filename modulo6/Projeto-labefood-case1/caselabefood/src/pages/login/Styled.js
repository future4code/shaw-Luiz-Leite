import styled from "styled-components"
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';


export const InputMaterial= styled(TextField) ` 
    width: 100%;
   
`

export const Main = styled.div `
padding: 10px;
height: 100vh;
width: 100%;
display: flex;
flex-direction:column ;
align-items: center;
p{
    font-size: 1rem;
}
`

export const Form = styled.div `
display: flex;
flex-direction: column;
height: 30%;
width: 80%;
justify-content: space-between;
margin-bottom: 10px;

`
export const ButtonStyled = styled(Button) `
&& {
    color:#000;
    width: 100%;
    background-color:#E8222E;

}

`
export const DivPassword = styled.div `
display: flex;
align-items: center;
justify-content: space-between;

`