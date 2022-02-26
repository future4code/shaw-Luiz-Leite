/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack")


if (confirm("Quer iniciar uma nova rodada?")) {
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const somaUser = carta1+carta2;
   console.log(`Usuário - cartas:${carta1.texto} ${carta2.texto} - pontuação ${carta1.valor + carta2.valor}`)
   const cartaPc1 = comprarCarta();
   const cartaPc2 = comprarCarta();
   const somaPc = cartaPc1+cartaPc2;
   console.log(`UsuárioPC - cartas:${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${cartaPc1.valor + cartaPc2.valor}`)
      if(somaUser>somaPc && somaUser <= 21){
         console.log ("O usuario ganhou!!")
      }
      else if (somaUser<somaPc && somaPC <= 21){
         console.log ("O Pc ganhou!!")

      } else ( somaPc === somaUser)
         console.log ("Empate!!")
      } 
else {
   console.log("O jogo acabou")
}


