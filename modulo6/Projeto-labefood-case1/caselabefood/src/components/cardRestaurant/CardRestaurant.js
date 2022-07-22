import { useNavigate } from "react-router-dom"
import {gotToRestaurant} from "../../routes/Coordnator"
import {BoxInformTimePrice, ContainerCardRestaurant, ImageRestaurant, InformTimePrice, NameRestaurant} from "../../components/cardRestaurant/Styled"


const CardRestaurant = ({restaurant}) => {

    const navigate = useNavigate()

    return <ContainerCardRestaurant  onClick={() => gotToRestaurant (navigate,restaurant.id)}>
        <ImageRestaurant src={restaurant.logoUrl}/>
        <NameRestaurant>{restaurant.name}</NameRestaurant>
        <BoxInformTimePrice>
            <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
            <InformTimePrice>{restaurant.shipping}</InformTimePrice>
        </BoxInformTimePrice>
    </ContainerCardRestaurant>

}

export default CardRestaurant