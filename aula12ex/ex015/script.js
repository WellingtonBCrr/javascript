function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res') 

    if (fano.value.lenght == 0 || Number(fano.value) < 1900 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'm-bebe.jpg')
            } else if (idade <= 21) {
                //Adolescente
                img.setAttribute('src', 'm-adolescente.jpg')
            } else if (idade <= 49) {
                //Adulto
                img.setAttribute('src', 'm-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'm-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'f-bebe.jpg')
            } else if (idade <= 21) {
                //Adolescente
                img.setAttribute('src', 'f-adolescente.jpg')
            } else if (idade <= 49) {
                //Adulto
                img.setAttribute('src', 'f-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'f-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}