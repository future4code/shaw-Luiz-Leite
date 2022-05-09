import React from 'react';
import { TripInfoContainer } from './styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripInfoIten from './TripInfoIten';




export const TripInfo= () => {


    return (
        
        <TripInfoContainer>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          Informações da viagem
        </Typography>
        <TripInfoIten infoName = {"Nome"} info = {"Viagem para Marte"}/>
        <TripInfoIten infoName = {"Planeta"} info = {"Marte"}/>
        <TripInfoIten infoName = {"Data"} info = {"01/07/2020"}/>
        <TripInfoIten infoName = {"Descrição"} info = {"Viagem maneira para colonizar marte"}/>
        <TripInfoIten infoName = {"Duração em dias"} info = {"228"}/>
      </CardContent>
    </Card>
        </TripInfoContainer>
    )


}

export default TripInfo