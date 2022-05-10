import React from 'react';
import { TripCandidatesListContainer } from './styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CandidadeItens from './CandidateItem';
 






export const CandidatesList= () => {


    return (
        <TripCandidatesListContainer>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          Lista de candidatos
        </Typography>
        <List dense={true}>
             <CandidadeItens/>
             <CandidadeItens/>
             <CandidadeItens/>
             <CandidadeItens/>
             <CandidadeItens/>
            </List> 
      </CardContent>
    </Card>
        </TripCandidatesListContainer>
    )


}

export default CandidatesList