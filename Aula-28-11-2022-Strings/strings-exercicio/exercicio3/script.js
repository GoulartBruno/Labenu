//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"


const sentence= "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(sentence)

let newSentence= sentence.replaceAll("verde","rosa").replaceAll("azul", "laranja")
console.log(newSentence)


console.log ("Does the new string include \"Verde\"?", newSentence.includes("verde"))
console.log ("Does the new string include \"Laranja\"?", newSentence.includes("laranja"))


let newSentence2= newSentence.replaceAll("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(newSentence2)