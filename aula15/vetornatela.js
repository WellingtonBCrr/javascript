let num = [5, 7, 1, 2, 4, 8, 9, 6, 3, 10 ,14, 11, 13, 12]
console.log(`${num}`)

console.log(`
    Método 1
    
    `)

for (let posicao = 0; posicao < num.length; posicao++) {
    console.log(`A posição ${[posicao]} tem o valor ${num[posicao]}`)
}

console.log(`
    
    Método 2
    
    `)


for (let posicao in num) {
    console.log(`A posição ${[posicao]} tem o valor ${num[posicao]}`)
}