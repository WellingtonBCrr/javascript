function contar() {
    var inicio = window.document.getElementById('inicio-contador')
    var fim = window.document.getElementById('fim-contador')
    var passo = window.document.getElementById('passo-contador')
    var resultado = window.document.getElementById('resultado-contador')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Complete a tabela adequadamente.')
    } else {
        resultado.innerHTML = 'Contando: <br>'

        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if (passo <= 0) {
            window.alert('Passo invalido! Considerando Passo igual 1.')
            passo = 1
        } 

        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
            resultado.innerHTML += ` 👉🏽  <strong>${c}</strong>`
            }            
        } else {
            for (var c = inicio; c >= fim; c-= passo) 
            resultado.innerHTML += ` 👉🏽 ${c}`
        }
        

        

        resultado.innerHTML += `<br><br> Finalizado! 🚩` 
    }
}