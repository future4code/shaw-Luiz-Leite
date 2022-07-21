import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL"
import axios from "axios";
import {BoxInputSearch, ContainerFeed, Menu, MenuItem} from "../../pages/feed/Styled"
import {CardsRestaurant} from "../../pages/feed/Styled"
import CardRestaurant from "../../components/cardRestaurant/CardRestaurant"
import {InputSearch} from "../feed/Styled"
import Header from "../../components/header/Header"
import { useProtectedPage } from "../../hooks/UseProctedPage";

const Feed = () =>{

    useProtectedPage()

    const [restaurants,setRestaurants]=useState([])
    const [categoryRestaurant, setCategoryRestaurant]= useState([])
    const [valueCategory, setValueCategory] = useState('')
    //const {setters,states} = useGlobal()
    
    const [inputText,setInputText] = useState('')



    
    const getRestaurants = () => {
       
        axios.get(`${BASE_URL}/restaurants`,{
        
        headers: {
            auth: localStorage.getItem("token")
        }
        
    })
    .then((res) => {
        console.log (res.data)
        setRestaurants(res.data.restaurants)
        setCategoryRestaurant(res.data.restaurants.category)
        filterCategory(res.data.restaurants)
    })
    .catch ((err) => {
        console.log(err)
    })
}
const filterCategory = (restaurants)=>{
    const arrayAux = []
    restaurants && restaurants.map((res) =>{
        arrayAux.push(res.category)

    })
    const takeOutRepeat = [...new Set(arrayAux)]

    const changeObjectArray = []

    takeOutRepeat.map((category)=>{
        const insertObj = {category,select:false}
        changeObjectArray.push(insertObj)
   
    })
    console.log (changeObjectArray)
    setCategoryRestaurant(takeOutRepeat)
}


console.log(categoryRestaurant);

useEffect (() => {
    getRestaurants()
},[])

    const filterRestaurant = restaurants.filter((restaurant)=>{
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLowerCase()):true
    })
    .filter ((restaurant) =>
    valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()):true)
    .map((restaurant) =>{
        return <CardRestaurant restaurant={restaurant}/>
    })

    const changeCategory = (category) =>  {
        setValueCategory(category)

        const result = categoryRestaurant.map((cat) =>{
            if(cat.category === category) {
                return {
                    ...cat,
                    select:true
                }
            } else {
                return {
                    ...cat,
                    select:false
                }
            }
            

        })
        setCategoryRestaurant(result)
    }


return (

        <ContainerFeed>
        <Header title={"Ifuture"}/>
        <BoxInputSearch>
        <InputSearch
            value={inputText}
            onChange={(event) =>setInputText(event.target.value)}
        />
        </BoxInputSearch>
        <Menu>
        <MenuItem 
                onClick={()=>changeCategory('')}
                >
                todos
                </MenuItem>
        {categoryRestaurant.map((category)=>{
            
            return (
                <MenuItem 
                select={category.select}
                onClick={()=>changeCategory(category.category)}
                >
                {category.category}
                </MenuItem>
                )
        })}
        </Menu>
        <CardsRestaurant>
        {filterRestaurant}
        </CardsRestaurant>
        </ContainerFeed>
    )

}
export default Feed