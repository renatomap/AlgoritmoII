read = require('readline-sync')

let nome = read.question('Digite um nome: ')

// nome impresso no forma escada
let nomeEscada = ''
for(let i = 0; i < nome.length; i++) {
    nomeEscada += nome[i]
    console.log(nomeEscada)
}