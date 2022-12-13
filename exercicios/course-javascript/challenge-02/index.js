//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções!

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(num1, num2) {
  let somaDoisNum = num1 + num2;
  return somaDoisNum;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
function invocarSoma(num1, num2) {
  const final = soma(num1, num2);
  return final + 5;
}

console.log(invocarSoma(5, 2));

// Qual o valor atualizado dessa variável?

12;

// Declare uma nova variável, sem valor.

let novaVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function string(nome) {
  novaVar = nome;
  return console.log(`O valor da variável agora é ${novaVar}`);
}

// Invoque a função criada acima.
string("25");

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tresArgumentos(valor1, valor2, valor3) {
  if (valor1 == null || valor2 == null || valor3 == null) {
    console.log("Preencha todos os valores corretamente!");
  }
  return console.log(+(valor1 * valor2 * valor3 + 2));
}

// Invoque a função criada acima, passando só dois números como argumento.

tresArgumentos(2, 2);

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresArgumentos(2, 5, 2);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.*/

function novafuncao(arg1, arg2, arg3) {
  if (
    (arg1 == null && arg2 == null) ||
    (arg1 == null && arg3 == null) ||
    (arg2 == null && arg3 == null)
  ) {
    return arg1;
  }
}

console.log(novafuncao(10, 10, 2));

/* Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
 */
