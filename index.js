const prompt = require("prompt-sync")();

let heroi = prompt("Qual seu nome? ");
let vitorias = parseInt(prompt("Quantos jogos você ganhou? "));
let derrotas = parseInt(prompt("Quantos jogos você perdeu? "));

let saldoVitorias = calcularSaldo(vitorias, derrotas);

let classificação = classificarHeroi(saldoVitorias);

console.log(
  `O ${heroi} tem um saldo de vitorias de ${saldoVitorias} e está no nível ${classificação}`
);

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function classificarHeroi(saldo) {
  if (saldo <= 10) return "Ferro";
  if (saldo <= 20) return "Bronze";
  if (saldo <= 50) return "Prata";
  if (saldo <= 80) return "Ouro";
  if (saldo <= 90) return "Diamante";
  if (saldo <= 100) return "Lendário";
  return "Imortal";
}
