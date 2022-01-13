read = require('readline-sync')

let numeros = []
let soma = 0
let media = 0

for(let i = 0; i < 3; i++){
    numeros[i] = Number(read.question('Digite a altura: '))
}
for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
media = soma / 3

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > media){
        console.log(numeros[i].toFixed(1))
    }
}