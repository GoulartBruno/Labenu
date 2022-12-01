// if alinhado

/*
let idadeDependedente= prompt("qual sua idade?")

//idadedependente >=13
//idadedependente <=17

if (idadeDependedente>=13){
    
    if(idadeDependedente<=17){
    console.log("Usuário pode ter o cartão de dependente")

    }}else{
        console.log("Usuário não pode ter o cartão de dependente")

    }


if(idadeDependedente >=13 && idadeDependedente<=17){
    console.log("Usuário pode ter o cartão de dependente")
}else{
    console.log("Usuário não pode ter o cartão")

}



//ternário

let chuva = true

chuva ? console.log("leva sobrinha") : console.log("pode deixar a sombrinha")

idadeDependedente=14

idadeDependedente=== 13 ? console.log("pode ter cartão") : console.log("consulte outras opções")



// switch-case


let escolhausuario = +(prompt (`Escolha 
1 - Fácil
2 - Black
3 - Platinum
4 - Master Gold`))

let cartao

switch(escolhausuario){
    case 1:
        cartao = "fácil"  
    break
    case 2:
        cartao ="black"
    break
    case 4:
        cartao ="master gold"
    break
        default:
        cartao = "escolha umas das quatro opções disponiveis"
        break
    }


console.log("Cartão", cartao)

*/


 

let numero= +(prompt("Digite um número aleatório e tente acertar."))


if(numero%3===0 && numero%2===0){
        console.log(`${numero} é divisível por 2 e 3.`)

//numero===30 ? console.log("Você acertou o número. Parabéns.") : console.log(" Infelizmente você errou, tente novamente.")

switch(numero){
        case 6:
        console.log("Você errou, o número é maior que 6")
        break

        case 12:
        console.log("Você errou, o número é meior que 12")
        break

        case 18:
        console.log("Você errou, o número é meior que 18")
        break

        case 24:
        console.log("Você errou, o número é meior que 24")
        break

        case 30:
        console.log("Você acertou!!!!")
        break
        default:
        console.log(" o número é maior que 30 ou menor que 6")
            break

}}
else{

    console.log("Você errou,")

}    