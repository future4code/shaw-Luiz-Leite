import { CreateTripContainer } from "./styled"
import React from 'react';
import Button from '@mui/material/Button';
import { TextField, Link } from '@mui/material';
import { ButtonDiv } from "./styled";



export const CreateTripPage = () => {



    return (
        <CreateTripContainer>
            <h1>Criar Viagem</h1>
            <TextField label={"Nome"} />
            <TextField label={"Planeta"} />
            <TextField label={"Data"} />
            <TextField label={"Descrição"} />
            <TextField label={"Duração em dias"} type = {'number'}/>

            <ButtonDiv>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Criar </Button>
                <Link to={''}>
                </Link>
            </ButtonDiv>
        </CreateTripContainer>
    )

}

export default CreateTripPage



