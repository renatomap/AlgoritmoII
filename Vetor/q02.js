read = require('readline-sync')

let notas = []
let soma = 0

for(let i = 0; i < 8; i++){
    notas[i] = Number(read.question('Digite a nota: '))
}
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
// console.log(notas)
console.log('A média é: ' + (soma / 8).toFixed(2))