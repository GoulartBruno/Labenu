let numero = +prompt("Digite um número.");

console.log(`O tabuada de ${numero} é:`);

for (let i = 1; i <= 10; i++) {
  let resultado = +(i * numero);
  console.log(`${i} x ${numero}=${resultado}`);
}
