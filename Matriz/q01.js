read = require("readline-sync")

let numeros = []

for(let i = 0; i < 4; i++) {
    numeros[i] = []
    for(let j = 0; j < 4; j++) {
        numeros[i][j] = Number(read.question("Matriz[" +i+ "][" +j+ "] = "))
    }
}
console.log(numeros)