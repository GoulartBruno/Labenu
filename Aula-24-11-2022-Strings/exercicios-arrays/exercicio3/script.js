const arrayNova1 = [7000, 16000, 8000, 12000]
const arrayNova2 = ["Apple", "SAP", "Microsoft", "Tesla"]
const arrayNova3 = [10, "Alemanha", 55, "Brasil"]
//novas arrays

const arrayNova1Copia = arrayNova1.slice()
const arrayNova2Copia = arrayNova2.slice()
const arrayNova3Copia = arrayNova3.slice()
//copia das arrays


arrayNova1Copia.unshift(8500)
//adicionando um numero no comeco da array

arrayNova2Copia.pop()
// removendo o ultimo valor da array

arrayNova3Copia.splice(1,1)
//remover o segundo iten da array

console.table(arrayNova1Copia)
console.table(arrayNova2Copia)
console.table(arrayNova3Copia)





