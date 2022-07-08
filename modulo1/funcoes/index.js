//Exercício de ineterpretação de código

//Exercício 1

//function minhaFuncao (variavel){
 //   return variavel * 5
//}

//minhaFuncao(2)
//minhaFuncao(10)

//a) O que vai ser impresso no console?
// sera impresso o resultado dos parametros da função , invocados por ela no console.log (minhaFunca(2))
//10 e 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)
//O que apareceria no console?
// não aconteceria nada. Ficaria sem nenhum valor.

// exercício 2

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
	//return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

//a) Explique o que essa função faz e qual é sua utilidade.
// Ela quer saber em boleanos se o texto inserido na variavel textoDoUsuario possue a palavra "cenoura"
//b)true, true e true


//----------------------------------------------------------------------------------------------------------------

//Exercício de escrita de codigo

//Exercício 1

//a)

let nome = prompt ("qual é o seu nome")
let idade = prompt ("quantos anos você tem")
let cidade =  prompt ("em qual cidade você nasceu")
let profissão = prompt ("o que você faz")

console.log ("Eu sou", nome,",tenho", idade,",moro",cidade," e sou ", profissão)*/

//b)

function frase(nome1,idade1,cidade1,profissao1){
    console.log ("eu sou" ,nome1,"tenho",idade1, "sou de ", cidade1 ," e sou",profissao1  )
}
frase ("luiz",32,"Campo Grande","eng.civil")*/

//Exercicio 2

//a)


function somar(n1, n2) {
  const soma = n1 + n2  
  return soma
}
const resposta = somar (1,3)
console.log(resposta)

//b)

function maior (m1,m2){
    const maiores = m1 >= m2
    return maiores 
}
const resposta2 = maior (5,4)
console.log(resposta2)

//c)
function parouimpar (pi){
    const pareseimpares = pi % 2 === 0
    return pareseimpares
}
const resposta3 = parouimpar (5)
console.log(resposta3)  

//d)

function tamanhodamenssagem (texto){
    console.log(texto.length, texto.toUpperCase())

}
    tamanhodamenssagem ("meu nome é Luiz")



// Exercicio 3

function soma1 (valor1, valor2) {
   const adicao = (valor1+valor2)
   return adicao
}
const soma1 = (3,30)
console.log (adicao)


function soma1 (valor1, valor2) {
    const adicao = (valor1+valor2)
    return adicao
 }
 const soma1 = (3,30)
 console.log (adicao)

 function soma1 (valor1, valor2) {
    const adicao = (valor1+valor2)
    return adicao
 }
 const soma1 = (3,30)
 console.log (adicao)

 function soma1 (valor1, valor2) {
    const adicao = (valor1+valor2)
    return adicao
 }
 const soma1 = (3,30)
 console.log (adicao)



