// Bloco da função
function pessoa(anos, meses, dia){
    let idade = anos * 365 + meses * 30 + dia
    return idade
}
// Programa principal
read = require('readline-sync')

let anos = Number(read.question('Digite o ano que nasceu: '))
let meses = Number(read.question('Digite o mes que nasceu: '))
let dia = Number(read.question('Digite o dia que nasceu: '))
// Chamado a função
let p = idade(anos, meses, dia)

console.log(p+' dias')
// console.log(pessoa(10, 12, 30)+" dias")