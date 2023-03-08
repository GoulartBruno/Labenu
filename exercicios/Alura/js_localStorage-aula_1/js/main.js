const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
//se nao existir o array ele vai criar- json.parse transforma os dados de texto para o javascript

itens.forEach((elemento) => {
  console.log(elemento.nome, elemento.quantidade);
});
//funcao para os elementos no consolo

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //interrompe o comportamento para poder rodar a lista

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];
  //quando aciona o evento ele vai no target. elements quantidade/nome

  criaElemento(
    nome.value,
    //busca o valor dentro do input Nome
    quantidade.value
    //busca o valor dentro do input quantidade
  );
  nome.value = "";
  quantidade.value = "";
  //zera o conteúdo do input
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  //cria uma li
  novoItem.classList.add("item");
  //cria uma class no html
  const numeroItem = document.createElement("strong");
  //cria uma tag strong
  numeroItem.innerHTML = quantidade;
  //recebe o valor da quantidade
  novoItem.appendChild(numeroItem);
  // add o numeroItem dentro do novoItem
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
  //acrescenta o valor nome dentro do novo item que ja contén a quantidade

  //   localStorage.setItem("nome", nome);
  //   localStorage.setItem("quantidade", quantidade);
  //guarda os elementos para que quando

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };
  //criando o objeto com as propriedade
  itens.push(itemAtual);
  //add o objeto dentro do array

  localStorage.setItem("itens", JSON.stringify(itens));
  //guandando os elementos (JSON.stringify foi usado para tranformar os dados em strigs pois o localStorage só strings )
}
