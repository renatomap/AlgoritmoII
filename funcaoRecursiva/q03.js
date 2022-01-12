function Ackerman(m, n){
    // caso base
    if(m == 0){
        return n + 1
    }
    // caso geral
    if(m != 0 && n == 0){
        return Ackerman(m - 1, 1)
    }
    // caso geral
    return Ackerman(m - 1, Ackerman(m, n- 1))
}

// console.log(Ackerman(0, 5))

read = require('readline-sync')

let m = Number(read.question('Digite o valor de "m\": '))
let n = Number(read.question('Digite o valor de "n\": '))

console.log(Ackerman(m, n))
