read = require("readline-sync");

// (for)
// for (inicialização; condicao; incremento){
//     executa o bloco de cddigo;
// }

var n1 = Number(read.question("Digite o 1° número: "));
var n2 = Number(read.question("Digite o 2° número: "));

for (let i = n1 + 1; i < n2; i++){
    console.log(i)
}