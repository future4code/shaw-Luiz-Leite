import HomePage from '../Pages/Home/Home';
import LoginPage from '../Pages/Login/LoginPage';
import TripDetailsPage from '../Pages/TripDetails/TripDetailsPage';
import CreateTripPage from '../Pages/CreateTrip/CreateTripPage';
import ApplicationFormPage from '../Pages/ApplicationForm/ApplicationFormPage';
import ListaTrip from '../Pages/ListTrips/ListTripsPage';
import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";




export const RouterPage = () => {
  
    return (
    <BrowserRouter>
        <Routes>
        <Route index element={<HomePage />} />
        <Route path="/viagens/detalhe" element={<TripDetailsPage/>} />
        <Route path="/viagens" element={<ListaTrip/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/inscricao" element={<ApplicationFormPage/>} />
        <Route path="/viagem/criar" element={<CreateTripPage/>} />
        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
};
