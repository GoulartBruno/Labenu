const firstName = prompt("Type your First name.");
const namo = prompt("Type your name.");
const study = prompt("What do you study?");
const birthday = prompt("What is your birth year?.");

console.log(
  firstName +
    " " +
    namo +
    " you learn " +
    study +
    " and you are " +
    (2022 - birthday) +
    " old."
);

let number01 = +prompt("Type a number.");
let number02 = +prompt("Type other number.");

let soma = number01 + number02;
let subtracao = number01 - number02;
let divisao = number01 / number02;
let multiplicacao = number01 * number02;

console.log(number01 + " + " + number02 + " = " + soma);
console.log(number01 + " - " + number02 + " = " + subtracao);
console.log(number01 + " * " + number02 + " = " + multiplicacao);
console.log(number01 + " / " + number02 + " = " + divisao);
