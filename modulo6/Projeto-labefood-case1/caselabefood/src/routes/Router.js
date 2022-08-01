import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/singup/SingUp";
import SignupAdress from "../pages/singupadress/SingupAdress";
import Feed from "../pages/feed/Feed";
import Restaurant from "../pages/restaurant/Restaurant";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart"
import ProfileEdit from "../pages/profileEdit/ProfileEdit"
import AdressEdit from "../pages/adressEdit/adressEdit";





const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
            <Route index element={<Login/>}/> 
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/adress" element={<SignupAdress/>}/>
            <Route path="/adressEdit/:id" element={<AdressEdit/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/feed/:restaurantId" element={<Restaurant/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:id" element={<ProfileEdit/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router