read = require('readline-sync')

let numeros = []

for(let i = 0; i < 5; i++){
    numeros[i] = Number(read.question('Digite um número: '))
}
for(let i = 0; i < numeros.length; i++){
    // console.log(Math.max(...numeros))
    // break
    if(numeros[i] == Math.max(...numeros)){
        console.log(numeros[i])
    }
}
