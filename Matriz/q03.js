read = require("readline-sync")

let matriz = []

for(let i = 0; i < 2; i++) {
    matriz[i] = []
    for(let j = 0; j < 2; j++) {
        matriz[i][j] = Number(read.question("Matriz[" +i+ "][" +j+ "] = "))
    }
}
let contImpar = 0
let soma = 0

for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        if(matriz[i][j] % 2 != 0) {
            contImpar += matriz[i][j]
        }
    }
}
soma += contImpar
console.log("A soma do números ímpares da matriz é: " +soma)