read = require('readline-sync')

let nomeVert = read.question('Digite um nome: ')

// O nome é impresso na forma vertical
for(let i = 0; i < nomeVert.length; i++) {
    console.log(nomeVert[i])
}