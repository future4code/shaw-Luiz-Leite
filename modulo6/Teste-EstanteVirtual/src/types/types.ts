export type authenticationData = {
    id: string

}


export type user = {
    id:string,
    competicao:string,
    atleta:string,
    value:number,
    unidade:string

}

export type recipe ={

    id:string,
    typecompeticao:string,
    description:string,
    

}

export const userTableName = "cookenu_users"
export const recepiTableName = "cookenu_users"



