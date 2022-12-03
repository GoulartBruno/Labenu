/*# Exercício 1

Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.*/

const digitoNumero=+(prompt("Digite um número aleatório"))

function valor(num1){
    if(num1%2===0){
        console.log("O número é par.")
    }else if(num1%2===1){
        console.log("O número é impar")
    }else{
        console.log("Você não digitou um valor númerico")
    }
    return

}

valor(digitoNumero)