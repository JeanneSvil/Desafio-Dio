let nome = "Ana"
let idade = 28
let tipo = "ninja"

class heroi {
  constructor(tipo, atacar) {
    this.tipo = tipo
    this.atacar = atacar
  }

  classe(){
    console.log("O "+ this.tipo + " " + nome + " de " + idade + " atacou usando " + this.atacar)
  }
}

let classeMago = new heroi("mago", "magia")
classeMago.classe()
let classeGuerreiro = new heroi("guerreiro", "espada")
classeGuerreiro.classe()
let classeMonje = new heroi("monje", "artes marciais")
classeMonje.classe()
let classeNinja = new heroi("ninja", "shuriken")
classeNinja.classe()