var idade = 16
console.log(`Você tem ${idade} anos`)
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 63){
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}