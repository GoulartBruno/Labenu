// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(
    (itemAnterior, itemPosterior) => itemAnterior - itemPosterior
  );
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const resultado = [];
  for (let numero of array) {
    if (numero % 2 === 0) {
      resultado.push(numero);
    }
  }
  return resultado;
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter((numero) => {
    return numero % 2 === 0;
  });
  const resultado = numerosPares.map((numero) => {
    return numero * numero;
  });
  return resultado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const arraOrdenado = retornaArrayOrdenado(array);
  return arraOrdenado[arraOrdenado.length - 1];
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero, maiorDivisivelPorMenor, diferenca;

  if (num1 > num2) {
    maiorNumero = num1;
    maiorDivisivelPorMenor = num1 % num2 === 0;
    diferenca = num1 - num2;
  } else {
    maiorNumero = num2;
    maiorDivisivelPorMenor = num2 % num1 === 0;
    diferenca = num2 - num1;
  }

  return { maiorNumero, maiorDivisivelPorMenor, diferenca };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const resultado = [];
  for (let i = 0; resultado.length < n; i += 2) resultado.push(i);
  return resultado;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let crescente = retornaArrayOrdenado(array);
  array = [crescente[crescente.length - 2], crescente[1]];
  return array;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const dados = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return dados;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  for (let elemento of dados) {
    if (elemento.idade > 14 && elemento.idade < 60 && elemento.altura > 1.5) {
      pessoasAutorizadas.push(elemento);
    }
    return pessoasAutorizadas;
  }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  for (let elemento of dados) {
    if (elemento.idade < 14 || elemento.idade > 60 || elemento.altura < 1.5) {
      pessoasAutorizadas.push(elemento);
    }
    return pessoasAutorizadas;
  }
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
