read = require("readline-sync");

// do{
//     var nota = read.question("Digite a nota: ");
//     if(nota < 0 || nota > 10){
//         console.log("Valor inválido");
//     }else{
//         console.log("Valor válido");
//     }
// }while(nota < 0 || nota > 10)

do{
    var nota = read.question("Digite a nota: ");
    if(nota >= 0 && nota <= 10 ){
        console.log("Valor válido");
    }else{
        console.log("Valor inválido");
    }
}while(nota < 0 || nota > 10)