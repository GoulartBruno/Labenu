console.log("Array")

// Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String
console.log("1° exercicios")
const array3Strings=["Bruno", "Michelle","Henrique"]
console.table(array3Strings)

// Crie um array com 3 itens do tipo Number
console.log("2° exercicios")
const array3Number = [5,5,10]
console.table(array3Number)


// Crie um array com uma String, um número e um booleano;
console.log("3° exercicios")

const OndeCopa= "Qatar"
const Quando= 2022
const BrasilJoga= true

const arrayCopa =[OndeCopa, Quando,BrasilJoga]
console.table(arrayCopa)


// Crie um array com apenas um valor. Um número.

const arrayApenas1=[10,5]
console.log(arrayApenas1)

// Crie um array sem nenhum valor dentro.
const arrayVazio=[]
console.log(arrayVazio)


/*Vamos tentar acessar índices específicos dos arrays da última prática.
Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array? */
console.log(array3Strings.length)


/*
Verifique se o terceiro array inclui cada um dos itens;*/
console.log(arrayCopa.includes("Qatar"))
console.log(arrayCopa.includes("Jamaica"))
console.log(arrayCopa.includes(2022))
console.log(arrayCopa.includes(Quando))
console.log(arrayCopa.includes(OndeCopa))

/*
No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.*/
console.log(arrayApenas1[2])
console.log(arrayApenas1.indexOf(10))


/*Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.*/

const novoArrayCopia = array3Strings

console.table("Array de Strings", array3Strings)

console.log("array de copiaStrings", novoArrayCopia)


/*
Faça push() de uma nova string no array copiado
*/

console.table(novoArrayCopia)


/*
Imprima os dois arrays. Há diferença?
Como podemos ajustar?
*/
console.log("Array copia")
console.table(novoArrayCopia)
console.log("Array Orriginal")
console.table(array3Strings)


const arrayCopiadoCorretamente = array3Strings.slice()

arrayCopiadoCorretamente.push("Labenu")
console.table(arrayCopiadoCorretamente)

console.table(array3Strings)




/*
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.*/

arrayCopiadoCorretamente
.splice(0,3)
console.table(arrayCopiadoCorretamente)




/*1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.*/


const arrayApenas1Numero=[100,22,36,50,44]

/*
2. Depois disso, crie uma cópia deste array utilizando o método slice().*/

const NovoArrayApenas1Numero= arrayApenas1Numero.slice()




/*
3. No array copiado:

Remova o último item */


NovoArrayApenas1Numero.pop()


/*Em seguida adicione o número 6 no fim do   array.*/


NovoArrayApenas1Numero.push(6)


/*Depois, remova o número que está no índice 2 array.
*/

NovoArrayApenas1Numero.splice(2,1)

/*Por fim, imprima os dois arrays.*/

console.table(NovoArrayApenas1Numero)