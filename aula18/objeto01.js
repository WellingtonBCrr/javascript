let amigo = {
    Nome: 'José', 
    Sexo: 'M', 
    Peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.Peso += p
    }
}
console.log(`O ${amigo.Nome} pesa ${amigo.Peso}` )