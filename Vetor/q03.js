read = require('readline-sync')

let vetorNum = []

for(let i = 0; i < 5; i++){
    vetorNum[i] = Number(read.question('Digite um número: '))
}
vetorNum.push(6, 7, 8, 9, 10)
console.log(vetorNum)