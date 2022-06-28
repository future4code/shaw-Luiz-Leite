import {genSalt, hash, compare} from "bcryptjs"


export class HashMenage {
    public hash = async (password: string) => {
        const rounds = Number("12")
        const salt = await genSalt(rounds)
        const result = await hash(password, salt) 
        return result
    }
    public compare = async (password: string, hash: string) => {
       const result = await compare(password, hash)
       return result
    }
}

//a) O que são os round e salt?
// Que valores são recomendados para o round? Que valor você usou? Por quê

//b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), 
//que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

//c) *Agora, crie a função que verifique se uma string é correspondente a um hash, 
//use a função `compare` do bcryptjs*