// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const adicao = (num1 + num2)
  return adicao
}

const somatorio = soma (1,2)
console.log(somatorio)

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01



function calculaAreaRetangulo () {
const altura =  prompt ("digite um numero")
const largura = prompt ("digite outro numero")
  const area = (altura * largura)
  console.log(area)
}



// EXERCÍCIO 02

function imprimeIdade() {
  const ano = prompt ("digite em que ano estamos")
  const nascimento = prompt ("digite o ano do seu nascimento")
    const idade = (ano - nascimento)
    console.log(idade)
}





// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura*altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt ("digite seu nome")
 const idade = prompt ("qual é sua idade")
 const email = prompt ("digite seu email")
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("digite sua primeira cor favorita")
  const cor2 = prompt ("digite sua segunda cor favorita")
  const cor3 = prompt ("digite sua terceira cor favorita")
  const cores = [cor1,cor2,cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 return array[0]

} 

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop(3,4)

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  return array.splice(0,4)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}