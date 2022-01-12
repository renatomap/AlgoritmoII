// Bloco da função
function tabu(N) {
    let n = 1
    for (let i = 1; i <= N; i++){
        let tabu = i * n
        console.log(n+' X '+i+' = '+tabu)
    }
    return N
}

// Programa principal
read = require('readline-sync')
let N = Number(read.question('Digite um número: '))

// Chamando a função
let n = tabu(N)
console.log(n)
// console.log(tabu(5))