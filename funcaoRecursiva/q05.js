function mdc(x, y){
    // caso base
    if(x >= y && x % y == 0){
        return y
    }
    // caso geral
    if(x < y){
        return mdc(y, x)
    }
    // caso geral
    return mdc(y, x % y)
}

// console.log(mdc(12, 9))

read = require('readline-sync')

let x = Number(read.question('Digite o valor de "x\": '))
let y = Number(read.question('Digite o valor de "y\": '))

console.log(mdc(x, y))