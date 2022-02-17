//Exercício de interpretação 

// Exercício 1

let array
console.log ("a.", array)

//a. undefined
//imprime no console a letra "a" e a variavel undefined

array= null       //null - aponta um objeto vazio, nulo , desonhecido 
console.log("b.", array)

//b. null
//imprime no console a letra b e a variavel descrita como null

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log("c.", array.length) 
 
//c. 11
//imprime no console a letra "c" e o tamanho do array, no caso 11

let i = 0
console.log("d.", array [i])

//d. 3
// imprime no console a letra "d." e a posição do array 0, no caso o primeiro numero do array o 3

array [i + 1] = 19
console.log ("e.", array)

//e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// imprime no console a letra "e" e troca a primeira posição do array pelo numero 19, mostrando o array.

const valor = array [i+6]
console.log ('f.', valor)

//f. 9
//imprime no console a letra "f" e o valor no setimo array que é o numero 9.

//---------------------------------------------------------------------------------------------------------------------

// Exerecício 2

//const frase = prompt ("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)

//SUBI NUM ONIBUS EM MIRROCOS 27
//imprime a frase que eu digitar, como o comando toUpperCase coloca ela toda em maiuscula e como o comando replaceALL,
//troca as ocorrencia, e no fim com o comando lenght, fala o numero de caracteres da frase ( incluindo os espaços).

//----------------------------------------------------------------------------------------------------------------------

// Exercicio de escrita de código

// Exercício 1

//let nome = prompt("Digite seu nome")
//let emailDoUsuario= prompt("Digite seu email")

//console.log("o email", emailDoUsuario , "foi cadastrado com sucesso. Seja Bem vindo (a)", nome)

// Exercício 2

const comidasPreferidas = ["lasanha", "churrasco", "strogonoff","hamburger","pizza"]

console.log("array completo", comidasPreferidas)

console.log ("Esssas são as minhas comidas preferidas",comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaFavorita = prompt("Qual sua comida favorita")

const novaComidasPreferidas = ["lasanha",comidaFavorita, "strogonoff","hamburger","pizza"]
console.log (novaComidasPreferidas)


//Exercicio 3


const listaDeTarefas = []
const tarefa1= prompt("digite uma tarefa")
const tarefa2=prompt("digite uma tarefa")
const tarefa3=prompt("digite uma tarefa")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const indiceTarefa = prompt("digite o indice da tarefa, 0,1 ou 2")
listaDeTarefas.splice(1,indiceTarefa)
console.log(listaDeTarefas)




































