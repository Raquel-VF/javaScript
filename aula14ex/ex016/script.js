function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.querySelector('input#txtf')
    var passo = window.document.querySelector('input#txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invélido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }else {
            //contagem regressiva
                for (let c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }