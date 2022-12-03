
/* a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função. */



const seunome = (nome) => {
    
   

    return  `Seu nome é: ${nome}`
    
}

 nome= prompt("Digite seu nome:")


console.log(seunome(nome))



/*b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.*/


function tabuada (numero){
    
    
   
return  `A tabuada de ${numero} é:
${numero} x 1= ${numero*1}
${numero} x 2= ${numero*2}
${numero} x 3= ${numero*3}
${numero} x 4= ${numero*4}
${numero} x 5= ${numero*5}
${numero} x 6= ${numero*6}
${numero} x 7= ${numero*7}
${numero} x 8= ${numero*8}
${numero} x 9= ${numero*9}
${numero} x 10= ${numero*10}`
}


console.log(tabuada(1))
console.log(tabuada(2))
console.log(tabuada(3))
console.log(tabuada(4))
console.log(tabuada(5))
