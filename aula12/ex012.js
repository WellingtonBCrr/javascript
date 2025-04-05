var agora = new Date() 
var hr = agora.getHours()

if (hr >= 0 && hr <= 24) {
    console.log(`Agora são ${hr}h`)
}

if (hr < 12 || hr == 24) {
    console.log(`Bom dia!`)
} else if (hr < 18) {
    console.log(`Boa tarde!`)
} else if (hr >= 18 && hr <= 23) {
    console.log(`Boa noite!`)
} else {
    console.log(`Número ${hr} não compatível! Indique uma hora no formato de 24h, ou seja, números entre 00h(meia noite) e 23h(onze horas da noite).`)
}