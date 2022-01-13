read = require("readline-sync")

let numDec = []

for(let i = 0; i < 3; i++) {
    numDec[i] = []
    for(let j = 0; j < 3; j++) {
        numDec[i][j] = Number(read.question("numDec[" +i+ "][" +j+ "] = "))
    }
}
let prod = 1

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        prod *= numDec[i][j]
    }
}
console.log("O produtos dos números da matriz " +prod)
