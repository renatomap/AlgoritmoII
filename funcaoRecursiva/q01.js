function soma(n){
    // caso base
    if(n == 1){
        return 1
    }
    // caso geral
    return n + soma(n - 1)
}
// console.log(soma(2))

read = require('readline-sync')

let n = Number(read.question('Digite um número: '))
console.log('A soma da sequência de 1 a ' + n + ' é ' + soma(n))