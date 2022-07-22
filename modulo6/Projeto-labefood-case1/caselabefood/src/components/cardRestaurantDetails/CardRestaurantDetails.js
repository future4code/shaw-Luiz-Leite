import { useNavigate } from "react-router-dom"
import {gotToRestaurant} from "../../routes/Coordnator"
import {Inform, ContainerCardRestaurantDetails, ImageRestaurant, InformTimePrice, NameRestaurant} from "../cardRestaurantDetails/Styled"


const CardRestaurantDetails = ({restaurant}) => {

    const navigate = useNavigate()

    return <ContainerCardRestaurantDetails  onClick={() => gotToRestaurant (navigate,restaurant.id)}>
        <ImageRestaurant src={restaurant.logoUrl}/>
        <NameRestaurant>{restaurant.name}</NameRestaurant>
        <Inform>{restaurant.category}</Inform>
        <BoxInformTimePrice>
            <Inform>{restaurant.deliveryTime}</Inform>
            <Inform>{restaurant.shipping}</Inform>
        </BoxInformTimePrice>
        <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetails>

}

export default CardRestaurantDetails