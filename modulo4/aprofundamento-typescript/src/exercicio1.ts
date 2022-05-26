const minhaString: string = "35"

const meuNumero: number = 35

const pessoa: { nome: string, idade: number, corFavorita:string} = {
    nome: "luiz marcelo",
    idade: 32,
    corFavorita:"azul"
    }
const pessoa1: { nome: string, idade: number, corFavorita:string} = {
    nome: "joão",
    idade: 35,
    corFavorita:"azul"
     }
const pessoa2: { nome: string, idade: number, corFavorita:string} = {
    nome: "Pedro",
    idade: 33,
    corFavorita:"preto"
    }
const pessoa3: { nome: string, idade: number, corFavorita:string} = {
    nome: "Gustavo",
    idade: 34,
    corFavorita:"verde"
    }

    enum Coresarcoiris {
        VERMELHO = "vermelho",
        AZUL = "azul",
        AMARELO = "amarelo",
        VERDE = "verde"

    }
   type pessoaEnum = {
    nome: "string",
    idade: number,
    corFavorita:Coresarcoiris

   }
   const pessoa5: { nome: string, idade: number, corFavorita:Coresarcoiris} = {
    nome: "paulo",
    idade: 34,
    corFavorita:Coresarcoiris.AZUL
    }

    console.log (pessoa5)
    
            

