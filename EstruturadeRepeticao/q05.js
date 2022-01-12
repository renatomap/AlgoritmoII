read = require("readline-sync");

const n = read.question("Digite o número: ");
console.log("\n•Tabuada de "+n+":");

for (let i = 1; i < 11; i++){
    const tabu = i * n
    console.log(n+" X "+i+" = "+tabu)
}