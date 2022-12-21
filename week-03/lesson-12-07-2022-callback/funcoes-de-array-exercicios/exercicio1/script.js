const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos",
  };
  
  /*Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
  1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
  saída esperada:*/
  
  function maiuscula(myobjeto) {
    for (let i in myobjeto) {
      console.log(`${i}: ${myobjeto[i].toUpperCase()}`);
    }
  }
  
  maiuscula(objeto);
  
  //2. A segunda deve retornar os valores do objeto como texto corrido.
  
  function textoCorrido(myobjeto) {
    console.log(
      `${myobjeto.nome}${myobjeto.profissao.replace(/\s/g, "")}${
        myobjeto.username
      }${myobjeto.senha}`
    );
  }
  
  textoCorrido(objeto);
  
  /*Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.*/
  
  function recebeCallback(objeto) {
    let nova = textoCorrido(objeto);
  
    return nova;
  }
  
  recebeCallback(objeto);
  