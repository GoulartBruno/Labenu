// Após declarada, atribua o valor 10 à variável `myvar`.

myVar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

let soma = 15 + 8;
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3;

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

const souNinja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

const comida = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

if (soma === myVar) {
  console.log("true");
} else {
  console.log("false");
}

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

if (myVar <= soma) {
  console.log("true");
} else {
  console.log("false");
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(num1, num2) {
  let resultado = num1 / num2;
  return resultado;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log(divisao(10, 2));
