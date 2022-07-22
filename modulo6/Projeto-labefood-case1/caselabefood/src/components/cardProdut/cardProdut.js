import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProdut, ImageProduct, InformButton, InformDescription, InformPrice, NameProduct } from "./Styled"


const CardProdut = ({product}) => {

    return <ContainerCardProdut>
    <ImageProduct src={product.photoUrl}/>
    <BoxInform>
        <BoxNameQuantity>
            <NameProduct>{product.name}</NameProduct>
        </BoxNameQuantity>
        <InformDescription>
            {product.description}
        </InformDescription>
        <BoxInformPriceButton>
        <InformPrice>
        {product.price}
        </InformPrice>
        <InformButton>
        Adicionar
        </InformButton>
        </BoxInformPriceButton>
    </BoxInform>
    </ContainerCardProdut>
}

export default CardProdut