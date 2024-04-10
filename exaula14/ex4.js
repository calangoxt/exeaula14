var readlineSync = require('readline-sync')
//10 desculpa mas nao faco a menor ideia do que é fibonacci e nao conseguir entender ex do google

//11
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let pergunta 
while(pergunta !== numeroAleatorio){
pergunta = Number(readlineSync.question(`fale o  numero:`))
if(pergunta>numeroAleatorio){
    console.log(`o numero é menor`)
}else if(pergunta<numeroAleatorio){
    console.log(`o numero é maior`)
}else{
    console.log('parabens vc acertou!!!!!!!!!!!!!')
}}
//12
let pergunta2
let resposta = 0
while(resposta !== pergunta2){
pergunta2 = Number(readlineSync.question(`fale 1 para cara e 2 para corroa`))
const caraOuCorroa = Math.floor(Math.random() * 2) + 1;
if(1===caraOuCorroa){
    console.log('deu cara!!!')
    resposta = 1
}if(2===caraOuCorroa){
    console.log('deu corroa!!!')
    resposta = 2 
}}