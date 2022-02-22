//-----------------------------------------------------objetos----------------------------------------------------------------------

//Exercícios de interpret



// 1 - exercícico 

// a) O que vai ser impresso no console?

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

/*Matheus Nachtergaele
index.js:28 Virginia Cavendish
index.js:29 {canal: 'Globo', horario: '14h'}*/


// o primeiro console.log foi mostrado o primeiro array , no caso "matheus nachtergaele".
// o segundo console.log imprimiu "virginia cavendish"
// o terceiro console.log aparece o obejeto canal 3, uma arrau composts por canal: globo, horario :14h


// 2 - exercício 

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

/*{nome: 'Juca', idade: 3, raca: 'SRD'}
idade: 3
nome: "Juca"
raca: "SRD"
[[Prototype]]: Object
index.js:52 
{nome: 'Juba', idade: 3, raca: 'SRD'}
idade: 3
nome: "Juba"
raca: "SRD"
[[Prototype]]: Object
index.js:53 
{nome: 'Jubo', idade: 3, raca: 'SRD'}
idade: 3
nome: "Jubo"
raca: "SRD"*/

//a) O que vai ser impresso no console?
// o primeiro console.log imprimiu o nome a idade e a raça do obejto cachorro
// o segundo console.log usou o comando ... (espelhamento), que repete as variaveis do obejto anterior, somente mudou o nome
// o terceiro console.log novamente espelhou , porem trocou a letra "a" pela "o" com o comando replaceAAll do nome do gato.
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Espelhamento

// 3 - exercício

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a) O que vai ser impresso no console?
//false e unidefined


//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// ao invocar a funçao e depois o obejto, não existia o termo altura como variavel, por isso undefined

//------------------------------------------------------------------------------------------------------------------------


//Exercício de escrita de código

// exercício 1

const pessoa = {
    nome:"joão",
    apelido: ["joaozinho", "jão", "magrão"],
}

function minhaFuncao (pessoa1){

console.log(`Eu sou ${pessoa1.nome}, mais pode me chamar de ${pessoa1.apelido[0]},${pessoa1.apelido[1]},${pessoa1.apelido[2]}.`)
}

minhaFuncao(pessoa)

const novaPessoa = {
    ... pessoa, apelido:["jj","j","magrelo"]
}
minhaFuncao(novaPessoa)





 //exercício 2

const usuario1 = {
    nome:"luiz",
    idade:32,
    profissão:"engenheiro",
}

const usuario2 = {
    nome:"gustavo",
    idade:20,
    profissão:"dev",
}


function dadosDoUsuario (pessoa){
    const arrayDoObejto = [pessoa.nome, pessoa.nome.length,pessoa.idade, pessoa.profissão ,pessoa.profissão.length]
    return arrayDoObejto
}

console.log(dadosDoUsuario(usuario1))
console.log(dadosDoUsuario(usuario2))


// exerício 3


const carrinho = []

const frutas1 = {
nome: "laranja",
disponibilidade: true,
}

const frutas2 = {
nome: "laranja",
disponibilidade: true,
}

const frutas3 = {
nome: "laranja",
disponibilidade: true,
}


function carrinhoDefrutas(frutas){
carrinho.push(frutas)
}

carrinhoDefrutas(frutas1)
carrinhoDefrutas(frutas2)
carrinhoDefrutas(frutas3)
console.log(carrinho)



