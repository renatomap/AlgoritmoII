// Bloco da função
function fatorial(valorIntPosi) {
    let fat = 1
    let i = 0
    while(i < valorIntPosi){
        i++
        fat *= i
    }
    return fat
}

// Programa principal
read = require("readline-sync")

let valorIntPosi = Number(read.question("Digite um valor inteiro positivo: "))
// Chamando a função
console.log("O fatorial de " + valorIntPosi + " é " + fatorial(valorIntPosi))
// console.log(fatorial(5))