read = require('readline-sync')

let frase = read.question('Digite uma frase: ')

for(let i = 0; i < frase.length; i++) {
    let subs = read.question('Escolha uma palavra da frase: ')
    // includes - determinar se uma string pode ser encontrada em outra string
    if(frase.includes(subs)) {
        // indexOf - retorna o índice da string
        console.log(`A palavra "${subs}" está na ` + frase.indexOf(subs))
        break

    }else{
        console.log(`A palavra "${subs}" não encontre-se na frase, digite novamente.`)
    }
}