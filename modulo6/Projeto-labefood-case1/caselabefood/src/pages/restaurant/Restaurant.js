import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import {ContainerRestaurant} from "../restaurant/Styled"
import CardRestaurantDetails from "../../components/cardRestaurantDetails/CardRestaurantDetails"
import CardProdut from "../../components/cardProdut/cardProdut";

const Restaurant = () =>{
    
    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState ({})


    const getRestaurant = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`,{
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
        .then ((res) => {
            setRestaurant (res.data.restaurant)
            console.log (res.data)

        })
        .cath ((err)=>{

        })
    }
        useEffect (() => {
            getRestaurant() 
        },[])


    return (
        <ContainerRestaurant>
        <CardRestaurant>
        <CardRestaurantDetails restaurant={restaurant}/>
        {
            restaurant.products && restaurant.products.map((product)=> {
                return <CardProdut product={product} key={product.key}/>
            })
        }
        </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant