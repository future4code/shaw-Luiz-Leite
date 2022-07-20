import {BoxInformTimePrice, ContainerCardRestaurant, ImageRestaurant, InformTimePrice, NameRestaurant} from "../../components/cardRestaurant/Styled"


const CardRestaurant = ({restaurant}) => {

    return <ContainerCardRestaurant>
        <ImageRestaurant src={restaurant.logoUrl}/>
        <NameRestaurant>{restaurant.name}</NameRestaurant>
        <BoxInformTimePrice>
            <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
            <InformTimePrice>{restaurant.shipping}</InformTimePrice>
        </BoxInformTimePrice>
    </ContainerCardRestaurant>

}

export default CardRestaurant