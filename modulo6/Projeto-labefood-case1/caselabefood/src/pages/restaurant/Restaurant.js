import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { Category, ContainerRestaurant, SelectionProductByCategory } from "../restaurant/Styled"
import CardRestaurantDetails from "../../components/cardRestaurantDetails/CardRestaurantDetails"
import CardProdut from "../../components/cardProdut/cardProdut";

const Restaurant = () => {

    const { restaurantId } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [categories, setCategories] = useState([])


    const getRestaurant = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setRestaurant(res.data.restaurant)
                console.log(res.data)

            })
            .cath((err) => {

            })
    }
    useEffect(() => {
        getRestaurant()
    }, [])
    useEffect(() => {
        if (restaurant.products) {
            const newCategories = []
            for (const product of restaurant.product) {
                if (!newCategories.includes(product.category)) {
                    newCategories.push(product.category)
                }
            }
            newCategories.push(product.category)
        }
        setCategories(newCategories)


    }, [restaurant])

    console.log(newCategories)



    return (
        <ContainerRestaurant>
            <CardRestaurant>
                <CardRestaurantDetails restaurant={restaurant} />
                {
                    restaurant.products &&
                    categories.map((category) => {
                        return <SelectionProductByCategory>
                            <Category>{category}</Category>
                            {
                                restaurant.products
                                    .filter((product) => {
                                        return product.category === category
                                    })
                                    .map((product) => {
                                        return <CardProdut product={product} key={product.id}
                                        />
                                    })
                            }

                        </SelectionProductByCategory>
                    })
                }
        </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant