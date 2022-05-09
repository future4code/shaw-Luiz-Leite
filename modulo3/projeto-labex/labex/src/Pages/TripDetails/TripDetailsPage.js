import React from 'react';
import CandidatesList from './CandidatesList';
import { TripDetailsContainer,ContentContainer } from "./styled"
import TripInfo from './TripInfoCard';




export const TripDetailsPage = () => {


    return (

        <TripDetailsContainer>
            <h1>Detalhes da viagem</h1>
            <ContentContainer>
        <TripInfo/>
        <CandidatesList/>
            </ContentContainer>
        </TripDetailsContainer>


    )


}

export default TripDetailsPage