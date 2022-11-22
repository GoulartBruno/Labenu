/*

const operacao1 = 5>20 && 5<2
const operacao2 = 5==5 || 5=="5"
const operacao3 = !(20>50)
const operacao4 =  !(20>50 || 50>60)

console.log("5 é maior que 20 e também é menor que 2;", operacao1)
//5 nao eh menor que 2

console.log("5 é igual a 5 ou é igual a “5”:", operacao2)
//true pois como estava usando OU e 5==5, deu verdadeiro

console.log("negação de (vinte é maior que cinquenta:", operacao3 )
//como esta usando a negação o 20>50 vira true

console.log( "negação de vinte é maior que cinquenta OU cinquenta é maior que sessenta", operacao4)
//como esta usando a negação ambas viram true*/


let salario= 2000
const auxiliocreche= 45.50*2
const comissao= 0.1
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco =4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000
const vendasJunho = 9450
const inss= 0.05
const inss2 =0.95

console.log("O salário fixo mais o auxílio creche é:", Number( salario + auxiliocreche))

console.log("Quanto Fulano de Silva receberá de comissão em janeiro?",Number(  vendasJaneiro*comissao.toFixed(2)))

console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS?", Number ( ((salario+(vendasJaneiro*comissao))*inss).toFixed(2)))

console.log("Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.")

let janeiroFinal= Number(((salario+(vendasJaneiro*comissao))*inss2)+auxiliocreche)

let fevereiroFinal= Number(((salario+(vendasFevereiro*comissao))*inss2)+auxiliocreche)

let marcoFinal= Number(((salario+(vendasMarco*comissao))*inss2)+auxiliocreche)

let abrilFinal = Number(((salario+(vendasAbril*comissao))*inss2)+auxiliocreche)

let maioFinal= Number(((salario+(vendasMaio*comissao))*inss2)+auxiliocreche)

let junhoFinal= Number (((salario+(vendasJunho*comissao))*inss2)+auxiliocreche)

let total= janeiroFinal+fevereiroFinal+marcoFinal+abrilFinal+maioFinal+junhoFinal


console.log("Janeiro:", janeiroFinal.toFixed(2))
console.log ("Fevereiro:", fevereiroFinal.toFixed(2))
console.log("Março:", marcoFinal.toFixed(2))
console.log("Abril:", abrilFinal.toFixed(2))
console.log("Maio:", maioFinal.toFixed(2))
console.log("Junho:", junhoFinal .toFixed(2))

console.log("A soma do valor de todos os meses foi:", total.toFixed(2))



let media= console.log("A média dos meses foi",((janeiroFinal+fevereiroFinal+marcoFinal+abrilFinal+maioFinal+junhoFinal)/6.).toFixed(2))