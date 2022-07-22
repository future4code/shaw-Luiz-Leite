import ModalSelectQuantity from "../modalSelectQuantity/modalSelectQuantity"
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProdut, ImageProduct, InformButton, InformDescription, InformPrice, NameProduct } from "./Styled"


const CardProdut = ({product}) => {
    const [showModal,setShowModal] = useState(false)

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
        <InformButton onClick={() => setShowModal (true)}>
        Adicionar
        </InformButton>
        </BoxInformPriceButton>
        <ModalSelectQuantity open={showModal} setOpen={setShowModal}/>
    </BoxInform>
    </ContainerCardProdut>
}

export default CardProdut