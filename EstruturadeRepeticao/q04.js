read = require("readline-sync");

let soma = 0, media = 0
let n, aux
for (let i = 0; i < 5; i++){
    n = Number(read.question("Digite o "+ (i + 1) +"° número: "))
    aux = n 
    soma += aux
    media = soma/ 5;

}
console.log("Soma: "+soma)
console.log("Média: "+media)