read = require('readline-sync')

let m = []
let mt = []

for(let i = 0; i < 2; i++) {
    m[i] = []
    for(let j = 0; j < 2; j++) {
        m[i][j] = Number(read.question('m[' +i+ '][' +j+ '] = '))
    }
}

for(let j = 0; j < 2; j++) {
    mt[j] = []
    for(let i = 0; i < 2; i++) {
        mt[j][i] = m[i][j]
    }
}

console.log('Matriz')
for(let j = 0; j < 2; j++){
    console.log('[' +m[j]+ ']')
}

console.log('Matriz transposta')
for(let i = 0; i < 2; i++){
    console.log('[' +mt[i]+ ']')
}