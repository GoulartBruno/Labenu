let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//as variaveis são undefined porque nao foi determinado um valor para elas

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//As variaveis são strings porque foram atribuido valores entre crases e nao foi feito o casting na variavel idade para torna-la Number.

const pergunta1 = "Está chovendo hoje?";
const pergunta2 = "Você está com frio?";
const pergunta3 = "Você está feliz?";

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);
