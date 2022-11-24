const arraySalarios=[2800,2000,2400]
//Criação de um array numerico

const arrayStrigs=["Bruno","Michelle"]
//criação de um array somente strings

const booleano= 10===0
//constante para verificação booleano

const arrayMisto= ["Brasil", 2002, 1994, booleano]
//array mista com Strins, numero e boleano

console.log(arraySalarios)
console.log(arrayStrigs)
console.log(arrayMisto)




console.log(`Qual a quantidade de itens desse array?`,arraySalarios.length)
console.log("Qual a quantidade de itens desse array?",arrayStrigs.length)
console.log("Qual a quantidade de itens desse array?",arrayMisto.length)

//Usado .lenght para saber a quantidade de itens de cada array



console.log("O primeiro número do arraySalarios é:", arraySalarios[0])
console.log("O Segunda string é arrayStrigsé:?",arrayStrigs[1])
console.log("O terceiro item de arrayMisto é:", arrayMisto[2])



console.log(arraySalarios.includes(2800))
console.log(arrayStrigs.includes("Ronaldo"))
console.log(arrayMisto.includes("1970"))
