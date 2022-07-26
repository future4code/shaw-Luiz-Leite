import React from "react"


const CardCart = (props) => {

    return (
    <Main>
        <CardComponent>
            <ImageCard src={props.photoUrl}/>
        </CardComponent>
        <InfoCard>
            <div>
                <p>{props.name}</p>
                <p>{props.amount}</p>

            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <p>{new Intl.NumberFormat('pt-Br',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.price)}
                    </p>
                    <Button>Remover</Button>
            </div>
        </InfoCard>
    </Main>
    )
}
export default CardCart