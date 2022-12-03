
/*
const booleano1 = false
const booleano2 = true

if(boolean1){
    alert("booleano1 is true!")
}else{
    alert("booleano is false")

}


const boolean3= 7

if(booleano1===booleano2){
    alert("1 and 2 are the same!")
}else if(booleano2===boolean3){
    alert("2 and 3 are the same!")
}else if(booleano1===boolean3){
    alert("1 and 3 are the same")
}else{
    alert("they are all different")
}
*/


/*


const myAge=prompt("qual sua idade?")

if(myAge>= 18 && myAge<60){
    alert("título obrigatório")
}else if(myAge>=60 || myAge>= 16 && myAge<18 ){
    alert("título é facultativo")
}else if(myAge<16){
    alert("Não pode emitir título de eleitor")
} else {
    alert("valor inválido")
}
*/

/*
1. Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10;
Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada. Adicione um else que imprime que a pessoa foi reprovada se a condição não foi atendida.*/

const media=prompt("Qual foi a média do aluno?")

if((media>=5 && media<=10)){
    console.log("Aluno aprovado")
}
else if(media>10){
    console.log("Nota inválida")
}
else if(media>=3 && media<5){
    console.log("Recuperação")
}
else if(media<3){
  console.log("Aluno reprovado")
}
else{
    console.log("dados inválidos")
}