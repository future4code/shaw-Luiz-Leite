import { BoxInform, BoxNameQuantity, ContainerCardProdut, ImageProduct, InformDescription, NameProduct } from "./Styled"


const CardProdut = ({product}) => {

    return 
    <ContainerCardProdut>
    <ImageProduct src={product.photoUrl}/>
    <BoxInform>
        <BoxNameQuantity>
            <NameProduct>{product.name}</NameProduct>
        </BoxNameQuantity>
        <InformDescription>
            {product.description}
        </InformDescription>
    </BoxInform>
    </ContainerCardProdut>
}

export default CardProdut