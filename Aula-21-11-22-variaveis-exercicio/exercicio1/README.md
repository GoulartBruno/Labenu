# Exercício 1

## Parte 1
Construa um programa, seguindo os seguintes passos:

**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor.

**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor.

**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    

>💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
    

**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

**g)** Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

>💡  Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
```jsx
console.log(valor1, valor2)
```

## Parte 2

Agora, vamos criar 3 perguntas com valores de Sim ou Não.

Siga as instruções abaixo:

**a)** Crie um programa que faça 3 perguntas para o usuário, através do prompt. Armazene a resposta de cada pergunta em uma variável.

**b)** Imprima no console todas as respostas.

**c)** Altere seu programa, para que o texto das perguntas sejam armazenadas em 3 variáveis diferentes. 

**d)** Troque o texto do seu prompt, pelas variáveis que contém as perguntas.

```
//mandando a pergunta como texto direto
const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

```
e) Altere o console para imprimir a pergunta e a resposta. 

```
Você está usando uma roupa azul hoje? - SIM
```
