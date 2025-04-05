var idade = 15

if (idade < 16) {
    console.log(`Você não tem direito ao voto por ainda ter ${idade} anos.`)
} else if (idade < 18) {
        console.log(`Você tem obrigação de votar, porém, por já ter ${idade} anos você tem o direito, se assim quiser, sendo o seu voto opcional.`)
    } else if (idade < 65) {
            console.log(`Você já tem ${idade} anos, seu voto é obrigatorio.`)
        } else {
            console.log(`Por já ter ${idade} anos, seu voto se tornou opcional novamente, sendo assim, não possui mais obrigação de votar.`)
        }
    
