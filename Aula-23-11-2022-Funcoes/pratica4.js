/*Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.

*/

function pratica4 (nome, anoDeNascimento, anoAtual) {

const maiorDeIdade = anoAtual -anoDeNascimento >=18

return  `Você se chama ${nome1} você nasceu em ${nascimento} você é maior de idade? ${maiorDeIdade}`


}

const nome1= prompt("qual seu nome?")
const nascimento = prompt("qual seu ano de nascimento?")
const atual = prompt("qual o ano atual?")


console.log (pratica4 (nome1, nascimento, atual))