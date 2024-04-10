var readlineSync = require('readline-sync')
//7
for(let i =1; i <=100 ;i ++ ){
    if(i%3===0 && i%5===0){
    console.log(`FizzBuzz`)
}else if(i%3===0){
    console.log(`Fizz`)
}else if (i%5===0){
    console.log(`Buzz`)
}else{
    console.log(i)
}}
//8
let maiorNumero = 0
let menorNumero = 100// se os numeros for maior que 100 aumertar esse valor
for(let i = 1; i<=10 ;i ++ ){

let pergunta = Number(readlineSync.question(`fale o ${i} numero:`))
if (pergunta>maiorNumero){
maiorNumero = pergunta
}
if (pergunta < menorNumero){
    menorNumero = pergunta
}
    if (i===10){
   console.log(menorNumero,maiorNumero)
}}
//9
let fatorial =1
for(let i = 1;i<=10; i++){
fatorial = fatorial*i
console.log(fatorial)
}