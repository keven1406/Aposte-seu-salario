var sorteio = Math.floor(Math.random() * 10);
console.log(sorteio);
function aposta(valor, resultado) {
  if (resultado == valor)
    console.log("Parabéns! Você ganhou R$3.000,00");
  else
    console.log("Não foi dessa vez! Você perdeu de ganhar R$3.000,00.\nO resultado foi: " + resultado + ".");
}
aposta(4, sorteio);
