function F(n){
    // caso base
    if(n == 1){
        return 1
    }else if(n == 2){
        return 2
    }
    // caso geral
    return 2 * F(n -1) + 3 * F(n -2)
}

// console.log(F(3))

read = require('readline-sync')

let n = Number(read.question('Digite um número: '))

console.log('A sequência dada por ' + n + ' é ' + F(n))