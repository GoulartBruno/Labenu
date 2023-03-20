

function testeNacionalidade(dados){
    const nacionalidade=["brasileira","argentina","uruguaia","chilena","colombiana"];
  

if(dados.toLowerCase()==(
    (nacionalidade[0])
)){
    console.log(`Nacionalidade é ${dados}`)
} else if(dados.toLowerCase()==(
    nacionalidade[1] 
)){
    console.log(`Nacionalidade é ${dados}`)
}  else if(dados.toLowerCase()==(
    nacionalidade[2] 
)){
    console.log(`Nacionalidade é ${dados}`)
} else if(dados.toLowerCase()==(
    nacionalidade[3] 
)){
    console.log(`Nacionalidade é ${dados}`)
}else if(dados.toLowerCase()==(
    nacionalidade[4] 
)){
    console.log(`Nacionalidade é ${dados}`)
}  
else{
    console.log("Nacionalidade não encontrada.")
}
return

}


(testeNacionalidade("brasileira"))