
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comaparador de igualdade ${a}===${b} é ${a === b}`

}
console.log(checarIgualdade(1, 3))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {

    return `No comparador de maioridade ${a}<${b} é ${a < b}`
}

console.log(verificaSeEMaior(321, 2156))


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= true
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const nomeDoUsuario = prompt("qual o mome do usuario")
const anoDeNascimento = Number(prompt("qual o seu ano de nascimento"))
const senhaDoUsuario = prompt("digite sua senha do usuario com no minimo 6 numeros")
const nacionalidade = prompt("qual sua nacionalidade")


const cadastro = (nome, ano, senha, paisdeorigem) => {
    const usuario = []
    let idade = 2022 - anoDeNascimento

    if (idade >= 18 && senha.length > 6 && paisdeorigem === "brasileira") {
        usuario.push(nome, ano, senha, paisdeorigem)
        console.log("cadastro efetivado com sucesso")


    } else {
        console.log("seu cadastro foi inválido")
    }
    return usuario

}

console.log(cadastro(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade))




// Exercício 4-----------------------------------------------------------------------------------------------
let senha = prompt("escreva uma senha")
senha === "labenu"

const login = (login) => {
    senha === "labenu"
    if (senha === "labenu") {
        console.log("Usuario logado")
    } else {
        console.log("senha inválida")
    }
    return login
}
console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    let nome = prompt("qual o seu nome")
    let vacina = prompt("qual vacina vc tomou")
    let data
    let tempo

    if (vacina === "astrazenica") {
      return  `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }else if (vacina === "coronavac"){
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }else {
        `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }
}

                console.log(primeiraDose())


                // LOOP+CONDICIONAL

                // Exercício 6 -------------------------------------------------------------------------------------

                const segundaDose = (nomeDoUsuario) => {
                    const usuarios = [
                        { nome: "Artur", imunizacao: "incompleta" },
                        { nome: "Barbara", imunizacao: "incompleta" },
                        { nome: "Carlos", imunizacao: "incompleta" }
                    ]

                    return {...usuarios, nomeDoUsuario, imunizacao:"completa"}


                }
                console.log(segundaDose("Artur"));
                console.log(segundaDose("Barbara"));
                console.log(segundaDose("Carlos"));
                // Exercício 7 --------------------------------------------------------------------------------------

                const avisoAosAtrasados = () => {
                    const usuarios = [
                        { nome: "Artur", imunizacao: "incompleta" },
                        { nome: "Barbara", imunizacao: "completa" },
                        { nome: "Carlos", imunizacao: "incompleta" }
                    ]

                    for (let i = 0; i < usuarios.length; i++){
                       if (usuarios[i].imunizacao === "incompleta"){
                         console.log(`Olá ${nome}! Sua imunização está ${imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)

                        }
                    
                console.log(avisoAosAtrasados());

                    
                // DESAFIO------------------------------------------------------------------------------------------

                const usuarios = [
                    {
                        nome: "Artur",
                        ano: 2000,
                        nacionalidae: "brasileiro",
                        senha: "123456",
                        vacina: "pfizer",
                        imunizacao: "incompleta"
                    },
                    {
                        nome: "Bárbara",
                        ano: 1984,
                        nacionalidae: "brasileira",
                        senha: "labenu",
                        vacina: "astrazenica",
                        imunizacao: "completa"
                    },
                    {
                        nome: "Carlos",
                        ano: 2000,
                        nacionalidae: "brasileiro",
                        senha: "123456",
                        vacina: "coronavac",
                        imunizacao: "incompleta"
                    }

                ]

                const cadastroDesafio = () => {
                   const ano = Number.prompt("qual ano você nasceu?")
                   const nacionalidade= prompt ("qual sua nascionalidade?")
                   const senha  = prompt ("qual a senha com no minimo 6 digitos?")
                   const imunizacao = prompt("completa ou incompleta?")
                   const vacina = prompt ("qual vacina você tomou?")
                   let idade = 2022 - ano
                   const cadastro = {
                       nome: nome,
                       ano:ano,
                       nacionalidade: nacionalidade,
                       senha:senha,
                       vacina:vacina,
                       imunizacao:imunizacao,
                     }
                     if (idade >= 18 && senha.length >=6 && nacionalidade === "brasileiro"){
                         usuarios.push(cadastro)
                         console.log(cadastro)
                     } else {
                         return "não cumpre com o cadastro"
                     }
                     return usuarios
                }


                console.log(cadastroDesafio());
                let senha = prompt ("Digite a sua senha:")

                const loginDesafio = () => {
                    for (let i=0; i < usuarios.length; i++) {
                      if (usuarios[i].senha === senha) {
                          console.log (`Usuarios ${usuarios[i].none} logado!`)
                      } else {
                          console.log ("Usuario não encontrado")
                      }
                    }
                }
                console.log(loginDesafio());

                const primeiraDoseDesafio = () => {
                    //  Sua lógica aqui
                }
                
                
                //----------------------------------------------------------------------------------------------
                
                const usuarios = [
                    {
                        nome: "Artur",
                        ano: 2000,
                        nacionalidae: "brasileiro",
                        senha: "123456",
                        vacina: "pfizer",
                        imunizacao: "incompleta"
                    },
                    {
                        nome: "Bárbara",
                        ano: 1984,
                        nacionalidae: "brasileira",
                        senha: "labenu",
                        vacina: "astrazenica",
                        imunizacao: "completa"
                    },
                    {
                        nome: "Carlos",
                        ano: 2000,
                        nacionalidae: "brasileiro",
                        senha: "123456",
                        vacina: "coronavac",
                        imunizacao: "incompleta"
                    }

                ]
                console.log(primeiraDoseDesafio())
                const segundaDoseDesafio = (nomeDoUsuario) => {
                    
                }


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

                const avisoAosAtrasadosDesafio = () => {
                    usuarios.map((item)=>{
                        if (item.imunizacao === 'incompleta') {
                            console.log(`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
                        }
                    }
                console.log(avisoAosAtrasadosDesafio());
                
            }
                    
