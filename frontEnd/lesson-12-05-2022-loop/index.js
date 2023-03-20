/*Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
O resultado deve ser: 70*/
/*

let numeros = +prompt("Digite um número");

let i = 0;
while (numeros !== 0) {
  i = i + numeros;
  numeros = +prompt("Digite um número");
}

console.log(i);

*/

/*Vamos escrever um programa que recebe um número por input de usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.


/*
let num01 = prompt("Digite um número:");

for (let i = 0; i <= num01; i++) {
  console.log(i);
}
*/

/*Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O número do índice ${indice} é ${numero[indice]}”

*/
/*

const arrayNum = [24, 15, 18, 05, 09, 12, 02];

for (let i = 0; i < arrayNum.length; i++) {
  console.log(`O número do indice ${i} é ${arrayNum[i]}`);
}
*/

/*

let tipoUsuario = prompt(
  "Escolha o tipo de usuário: \n     Digite A para Administrador. \n     Digíte B para Usuário comum. \n     Digite C para Usuário assinante. "
).toUpperCase();

while (tipoUsuario !== "A") {
  alert("Acesso Negado, tente novamente.");
  tipoUsuario = prompt(
    "Escolha o tipo de usuário: \n     Digite A para Administrador. \n     Digíte B para Usuário comum. \n     Digite C para Usuário assinante. "
  ).toUpperCase();
}
alert("Boas-vindas, admin!");
*/
/*
let tabuada = 2;
let resultado;
console.log(`A tabuada de ${tabuada} é: `);

for (let i = 1; i <= 10; i++) {
  resultado = tabuada * i;
  console.log(`${tabuada} x ${i}= ${resultado}`);
}
*/

let arrayStrigs = ["Bruno", "Michelle", "Pedro"];

for (let i = 0; i <= 2; i++) {
  console.log(arrayStrigs[i].toUpperCase());
}
