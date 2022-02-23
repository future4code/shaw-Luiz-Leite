//Exercícios de interpretação de código

//-1
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a- é uma comparação, se o numero for par, ele passa no teste, senão , não passa no teste
//b- numeros pares
//c- numeros ímpares*/

//-2

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a- é o comparativo de preços das frutas usando o comando switch.
//b- 5 reais
//c- 5 reais*/

//-3

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//a) O que a primeira linha está fazendo?

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//---------------------------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//1 

let idade = Number (prompt ("digite sua idade"))

if(idade >=18) {
	console.log ("você é maior de idade, então pode dirigir")

} else {
	console.log ("você é menor de idade, não pode dirigir")
}


//2


let turno = prompt("Digite m (matutino), v (vespertino) ou n (noturno).")

let m = "matutino"
let n = "noturno"
let v = "vespertino"

if (turno === "m") {
	console.log("Bom dia")

} else if (turno === "v" ) {
	console.log ("Boa Tarde")

} else {
	console.log ("Boa noite")
}

//3 

let turnos  = prompt("Digite o turno que você estuda : Digite m (matutino), v (vespertino) ou n (noturno).")

let m = "matutino"
let n = "noturno"
let v = "vespertino"

switch (turnos){
	case("m") : console.log ("bom dia")
	break;
    case("v"): console.log ("boa tarde")
	break;
	case ("n"): console.log ("boa noite")
	break;
}

//4

const generoFilme = prompt ("qual é o genero do filme")
const preçoDoingresso = prompt ("qual o preço do ingresso")

if (generoFilme === "fantasia"){
	console.log ("bom filme")
	
} else if (preçoDoingresso <= 15) {
	console.log("bom filme")
} else {
	console.log ("escolha outro filme")
}

