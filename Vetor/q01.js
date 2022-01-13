read = require('readline-sync')
let numeros = []
// let calc = 0

for(let i = 0; i < 10; i++){
    numeros[i] = Number(read.question('Digite o elemento ' + i + ': '))
    // calc += numeros[i]
}
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i] + ' ao quadrado é: ' + Math.pow(numeros[i], 2))
}
// console.log(numeros.length)
// console.log('O valor total armazenado é: ' + calc)