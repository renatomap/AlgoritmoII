// Bloco da função
function divisor(num){
    let div = 0
    for(let i = 1; i <= num; i++){
       if(num % i == 0){
        div+=1
        //div = div + 1
       }
   }
   return div
}
// Programa principal
read = require('readline-sync')
let num = Number(read.question('Digite um valor inteiro positivo: '))

// Chamando a função
let div = divisor(num)

console.log('0(s) divisor(es) de '+num+' é: '+div+' número(s)')
// console.log(divisor(12))