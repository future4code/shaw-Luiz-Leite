export type authenticationData = {
    id: string

}

export type user = {
    id:string,
    name:string,
    email:string,
    password:string

}

export type recipe ={

    id:string,
    title:string,
    description:string,
    cratedAt:string,
    authorId:string

}

export const userTableName = "cookenu_users"
export const recepiTableName = "cookenu_users"