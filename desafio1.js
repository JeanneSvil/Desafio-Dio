let nome = "Daniela"
let experiencia = 1000

switch (true) {
  case experiencia <= 1000:
    console.log("O Herói de nome " +nome+ " está no nível de Ferro")
    break;

  case (experiencia >= 1001) && (experiencia <=2000):
    console.log("O Herói de nome " +nome+ " está no nível de Bronze")
    break;

  case (experiencia >= 2001) && (experiencia <=5000):
    console.log("O Herói de nome " +nome+ " está no nível de Prata")
    break;
        
  case (experiencia >= 5001) && (experiencia <=7000):
    console.log("O Herói de nome " +nome+ " está no nível de Ouro")
    break;
    
  case (experiencia >= 7001) && (experiencia <=8000):
    console.log("O Herói de nome " +nome+ " está no nível de Platina")
    break;
    
  case (experiencia >= 8001) && (experiencia <=9000):
    console.log("O Herói de nome " +nome+ " está no nível de Ascendente")
    break;    
  case (experiencia >= 9001) && (experiencia <=10000):
    console.log("O Herói de nome " +nome+ " está no nível de Imortal")
    break;

  default:
    console.log("O Herói de nome " +nome+ " está no nível de Ascendente")
    break;
}

