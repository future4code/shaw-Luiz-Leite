// exercícios de interpretação

//-----------------------------------------------------------------------------------------------------------------

//exercício 1 
// console.log ( "a. ", false)
// console.log ( "b. ", false)
// console.log ( "c." , true )
// console.log ( "d.", boolean)

//exercício 2

// Ele quer somar os dois valores, porem ao usar o comando prompt, o valor vira string, ai é feita uma concatenação,
// e não uma soma de dois valores.

//console.log(soma)// sera impresso 1010

//exercício 3

// o correto a fazer é acrescenta o comnado Number na frente do prompt em cada variavel.
//let primeiroNumero =Number( prompt("Digite um numero!"))
//let segundoNumero =Number(prompt("Digite outro numero!"))

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

//--------------------------------------------------------------------------------------------------------------------

// exercício de escrita de código 

// exercício 1

//let idade =Number (prompt (" digite sua idade!"))
//let idadeAmigo =Number (prompt (" digite a idade do seu melhor amigo!"))

//const maiorIdade = idade > idadeAmigo
//const diferencaIdade = idade - idadeAmigo

//console.log (" sua idade é maior doque a do seu melhor amigo?", maiorIdade)
//console.log (" a diferença de idade é", diferencaIdade)


// exercício 2

//let numeropar = Number (prompt ("digite um numero par"))
//const restodadivisao = numeropar % 2

//console.log (restodadivisao)

// quando se coloca um numero par, o resto da divisão é 0 sempre
// quando se coloca um numero impar, o resto da divião é 1 sempre

// exercício 3

let anoNascimento = Number ( prompt ("em que ano você nasceu?"))
let anoatual = Number ( prompt ("em que ano nós estamos"))
const idadeEmAnos = anoNascimento - anoatual


console.log (" sua idade em anos é", idadeEmAnos)
console.log ("sua idade em dias é ", idadeEmAnos*365)
console.log ("sua idade em meses", idadeEmAnos * 12)
console.log (" sua idade em horas é", idadeEmAnos * 8760)


// exercício 4

