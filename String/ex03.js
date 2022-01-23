read = require('readline-sync')

let texto = read.question('Digite um texto: ')
// toLocaleLowerCase - retorna a string com letra minúscula
console.log(texto.toLocaleLowerCase('pt-br'))
// toLocaleUpperCase - retorna a string com letra maiúscula 
console.log(texto.toLocaleUpperCase('pt-br'))