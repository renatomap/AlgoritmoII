read = require('readline-sync')

let frase = read.question('Digite uma frase: ')

for(let i = 0; i < frase.length; i++) {
    let subs = read.question('Qual palavra na frase queira substituir: ')
    let nova = read.question('Digite a nova palavra: ')
    // includes - determinar se uma string pode ser encontrada em outra string
    if(frase.includes(subs)) {
        // replace - retorma uma nova string de outra string
        console.log(frase.replace(subs, nova))
        console.log(`A palavra "${subs}" foi substituida pela palavra "${nova}."`)
        break
    }else{
        console.log('\n' + frase)
        console.log(`Palavra "${subs}" não encontra-se na frase acima, digite novamente. `)
        continue
    }
}