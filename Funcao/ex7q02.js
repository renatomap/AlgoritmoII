// Bloco da função
function positivo(n) {
    if(n >= 0){
        return true
    }else{
        return false
    }
}
// Programa principal
read = require('readline-sync')
let n = Number(read.question('Digite um valor inteiro: '))
// Chamado a função
if(positivo(n)){
    console.log('Valor positivo')
}else{
    console.log('Valor negativo')
}