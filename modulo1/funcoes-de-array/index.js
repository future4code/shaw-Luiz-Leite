//Exercícios de interpretação de código


// exercício 1 

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/

//a) O que vai ser impresso no console?

//no exercicio foi usado o comando map, que mapeia os itens, e o console pra impimir os
// objetos completos.

//Objectapelido: "Mandi"nome: "Amanda Rangel"[[Prototype]]: Object 0 Array(3)
//index.js:10 Objectapelido: "Laura"nome: "Laís Petra"[[Prototype]]: Object 1 Array(3)
//index.js:10 Objectapelido: "Chijo"nome: "Letícia Chijo"[[Prototype]]: Object 2 Array(3)

// exercício 2

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/

//a) O que vai ser impresso no console?

//usou o comando map, para mapear os objetos acima, e retornar somento o nome. e imprimiu 
//no console um array com os nomes.
//(3) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
/*0: "Amanda Rangel"
1: "Laís Petra"
2: "Letícia Chijo"
length: 3
[[Prototype]]: Array(0)*/


// exercício 3
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/

//a) O que vai ser impresso no console?
//Foi usado o comando filter para filtrar somente o um item do objeto, e retornar todos os 
// itens apelidos diferentes do "chijo".
/*(2) [{…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
length: 2*/

//----------------------------------------------------------------------------------------------


//Exercícios de escrita de código

//exercício 1
//Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//a) Crie um novo array que contenha apenas o nome dos doguinhos


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayPet = pets.map((item,index,array)=>{
     return item.nome

 })
 console.log (novoArrayPet)

 
 //b) Crie um novo array apenas com os cachorros salsicha

 const novoArrayPetraca = pets.filter((item,index,array)=>{
     return item.raca === "Salsicha"
 })
 console.log (novoArrayPetraca)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const raca = prompt ("qual a raça do seu cachorro")

if(raca==="poodle"){
    return arrayracapoodle
}
console.log(`você ganhou um cupom de desconto de 10% tosar o/a`)



//Exercício 2
//Dado o seguinte array de produtos, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item

const novoArrayLista = produtos.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayLista)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
// aplicando 5% de desconto em todos eles

const novoArraydesconto = produtos.map((item, index, array) => {
    return { 
        item.nome.toUpperCase(),
    produtos: (produto.preco*0.95).tofixed(2)
}
})


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas