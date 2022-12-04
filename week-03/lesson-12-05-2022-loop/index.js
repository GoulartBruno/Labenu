/*

let numeros;
let i = 0;

while (numeros !== 0) {
  numeros = +prompt("Digite um número");
  i = i + numeros;

  if (numeros === 0) {
    console.log(`A soma dos números digitados é: ${i}`);
  }
}
*/

/*
let num01 = prompt("Digite um número:");

for (let i = 0; i <= num01; i++) {
  console.log(i);
}

*/
/*
const arrayNum = [24, 15, 18, 05, 09, 12, 02];

for (let i = 0; i <= 6; i++) {
  console.log(`O número do indice ${i} é ${arrayNum[i]}`);
}

*/

/*

let tipoUsuario = prompt(
  "Escolha o tipo de usuário: \n     Digite A para Administrador. \n     Digíte B para Usuário comum. \n     Digite C para Usuário assinante. "
).toLowerCase();

while (tipoUsuario !== "a") {
  alert("Acesso Negado, tente novamente.");
  tipoUsuario = prompt(
    "Escolha o tipo de usuário: \n     Digite A para Administrador. \n     Digíte B para Usuário comum. \n     Digite C para Usuário assinante. "
  ).toLowerCase();
}
{
  if (tipoUsuario === "a") {
    alert("Boas-vindas, admin!");
  }
}*/
/*
let tabuada = 2;
let resultado;
console.log(`A tabuada de ${tabuada} é: `);

for (let i = 1; i <= 10; i++) {
  resultado = tabuada * i;
  console.log(`${tabuada} x ${i}= ${resultado}`);
}

*/

let arrayStrigs = [];

for (let i = 0; i <= 2; i++) {
  let strings = prompt("Digite um nome.").toUpperCase();
  arrayStrigs.push(strings);
}
console.table(arrayStrigs);
