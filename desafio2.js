let saldoVitorias = janelaDeStatus()
let nivel = rackeadas(saldoVitorias)

function janelaDeStatus(){
  let vitorias = 55
  let derrotas = 5
  let saldoVitorias = vitorias - derrotas
  return saldoVitorias
}

function rackeadas(saldoVitorias){
  let nivel

  if(saldoVitorias <= 10){
    nivel = "Ferro"
  }
  else if((saldoVitorias >= 11) && (saldoVitorias <= 20)){
    nivel = "Bronze"
  }
  else if((saldoVitorias >= 21) && (saldoVitorias <= 50)){
    nivel = "Prata"
  }
  else if((saldoVitorias >= 51) && (saldoVitorias <= 80)){
    nivel = "Ouro"
  }
  else if((saldoVitorias >= 81) && (saldoVitorias <= 90)){
    nivel = "Diamante"
  }
  else if((saldoVitorias >= 91) && (saldoVitorias <= 100)){
    nivel = "Lendário"
  }
  else{
    nivel = "Imortal"
  }
  return nivel
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível ${nivel}`)