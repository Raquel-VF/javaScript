let num = [5, 8, 2, 9, 3]
//num [3] = 6 
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)

/*console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O segundo valor do vetor é ${num[1]}`) 
console.log(`O terceiro valor do vetor é ${num[2]}`)
console.log(`O quarto valor do vetor é ${num[3]}`)
console.log(`O quinto valor do vetor é ${num[4]}`)*/

//inicialização - teste logico - incremento
/*for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}*/
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
