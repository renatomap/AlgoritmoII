function mod(x, y){
    // caso base
    if(x < y){
        return x
    }else if(x == y){
        return 0
    }
    // caso geral
    return mod(x - y, y)
}

// console.log(mod(1, 10))

read = require('readline-sync')

let x = Number(read.question('Digite o valor de "x\": '))
let y = Number(read.question('Digite o valor de "y\": '))

console.log(mod(x, y))