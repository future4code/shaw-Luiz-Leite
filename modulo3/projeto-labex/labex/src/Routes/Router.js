import HomePage from '../Pages/Home/Home';
import LoginPage from '../Pages/Login/LoginPage';
import AdminHomePage from '../Pages/AdminHome/AdminHomePage';
import TripDetailsPage from '../Pages/TripDetails/TripDetailsPage'
import CreateTrip from '../Pages/CreateTrip/CreateTripPage'
import ApplicationFormPage from '../Pages/ApplicationForm/ApplicationFormPage'
import ListaTrip from '../Pages/ListTrips/ListTripsPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";



export const Router = () => {
    return(
        
        <BrowserRouter>
        <Routes>
        <Route index element = {<HomePage/>} />
        <Route path="login" element = {<LoginPage/>} />
        <Route path="admin" element = {<AdminHomePage/>} />
        <Route path="trip" element = {<TripDetailsPage/>} />
        <Route path="list" element = {<ListaTrip/>} />
        <Route path="create" element = {<CreateTrip/>} />
        <Route path="appForm" element = {<ApplicationFormPage/>} />
        </Routes>
        </BrowserRouter>
        
    )
}