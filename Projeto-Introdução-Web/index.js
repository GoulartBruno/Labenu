const marca1= "BMW"
const modelo1= "X6"
const ano1= 2021
const km1= 10214
const zeroKM1= km1==0


const marca2= "Mercedes"
const modelo2= "EQS"
const ano2= 2018
const km2= 87421
const zeroKM2=km2==0

const marca3= "Audi"
const modelo3= "Q8"
const ano3= 2023
const km3=0
const zeroKM3=km3==0


let mediaKm=(km1+km2+km3)/3


console.log(mediaKm.toFixed(0))

const verificaZerokm = km1===0 && km2===0 && km3===0

console.log ("O carro é zero km?",verificaZerokm)

const arrayConforto= ["Direção Hidráulica", "Teto Solar", "Airbag","Câmera de Estacionamento"]


console.table(arrayConforto)

