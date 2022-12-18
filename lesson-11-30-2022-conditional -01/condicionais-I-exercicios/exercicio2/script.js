/*# Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

*/


const suaIdade=+(prompt("Qual sua idade:"))
const temEN=confirm("Você acabou o ensino médio?")
const fazendoFacul=confirm("Você esta cursando universidade?")



function dados(idade,AcabouEM, cursaFacu){
    
    if(idade>=18){
        console.log("O aluno é maior de idade.")
    }else{
    console.log("O aluno é menor de idade.")
    }
    if(AcabouEM){
        console.log("O aluno já concluiu o ensino médio.")
    }else {
        console.log("O aluno ainda não concluiu o ensino médio.")
    }
    if(cursaFacu){
        console.log("O aluno cursa universidade.")
    }else{
        console.log("O aluno não cursa universidade.")
    }
    if(idade>=18 && AcabouEM && !cursaFacu){
        console.log("Voce pode participar de um curso superior na nossa univerdade.")
    }else{
        console.log("Infelizmente você não pode participar de um curso superior na nossa universidade.")
    }

    return 

}

dados(suaIdade,temEN,fazendoFacul)

