read = require('readline-sync')

let m1 = []
let m2 = []

for(let i = 0; i < 3; i++) {
    m1[i] = []
    for(let j = 0; j < 3; j++) {
        m1[i][j] = Number(read.question('m1[' +i+ '][' +j+ '] = '))
    }
}
let soma1 = 0
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        soma1 += m1[i][j]
    }
}

for(let k = 0; k < 3; k++) {
    m2[k] = []
    for(let l = 0; l < 3; l++) {
        m2[k][l] = Number(read.question('m2[' +k+ '][' +l+ '] = '))
    }
}
let soma2 = 0
for(let k = 0; k < 3; k++) {
    for(let l = 0; l < 3; l++) {
        soma2 += m2[k][l]
    }
}
let m3 = [soma1 + soma2]

console.log('A m3 é ' +m3+ ', a soma da m1 com m2.')