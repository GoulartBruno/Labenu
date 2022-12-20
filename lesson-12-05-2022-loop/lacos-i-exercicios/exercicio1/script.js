let coxinhas = prompt(`Você que comer mais coxinhas?
Digite "S" para sim ou "N" para não.`).toUpperCase();
let quantidade = 0;

while (coxinhas == "S") {
  quantidade = quantidade + 2.5;
  coxinhas = prompt(`Você que comer mais coxinhas?
Digite "S" para sim ou "N" para não.`).toUpperCase();
}

console.log(`O valor da conta é R$${quantidade.toFixed(2)}`);
