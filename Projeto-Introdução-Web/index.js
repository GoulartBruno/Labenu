const brand1= "BMW"
const model1= "X6"
const year1= 2021
const km1= 10214
const zeroKM1= km1==0
//variables car01

const brand2= "Mercedes"
const model2= "EQS"
const year2= 2018
const km2= 87421
const zeroKM2=km2==0
//variables car02


const brand3= "Audi"
const model3= "Q8"
const year3= 2023
const km3=0
const zeroKM3=km3==0
//variables car03


let averageKm=("what'is the average kimoter of the 3 cars?", km1+km2+km3)/3
//operation to know the kilometer average


console.log(averageKm.toFixed(0))
//print the kilometer average

const checkZerokm = km1===0 && km2===0 && km3===0
//constant to check if the cars are all zero km

console.log ("The car is zero km?",checkZerokm)
//print the check

const arraycomfort= ["Hydraulic steering", "Sunroof", "Airbag","Parking camera"]
//array to show the comfort of cars


console.table(arraycomfort)
//print de arraycomfort