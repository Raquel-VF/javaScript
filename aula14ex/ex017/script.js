function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        //usar crase dupla para zerar a cx
        tab.innerHTML = ''
        while(c <= 10){
            //criar um elemento option no js ao inves de ser no html
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //saber qual item foi selecionado
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    

}