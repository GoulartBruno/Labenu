function addInput() {
  const escalacao = document.getElementById("escalacao");
  const newUl = document.createElement("ul");
  newUl.id = "jogador";
  const newLi = document.createElement("li");
  const nome = document.getElementById("nome");
  const nomeJogador = nome.value;
  newUl.appendChild(newLi);
  escalacao.appendChild(newUl);

  const posicao = document.getElementById("posicao");
  const posicaoJogador = posicao.value;

  const numero = document.getElementById("numero");
  const numeroJogador = numero.value;
  newLi.innerText +=
    "Nome: " +
    nomeJogador +
    "\n" +
    " Posição: " +
    posicaoJogador +
    "\n" +
    " Numero: " +
    numeroJogador;
}

function addInput() {
  const escalacao = document.getElementById("escalacao");
  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");
  const nome = document.getElementById("nome");
  const nomeJogador = nome.value;
  newUl.appendChild(newLi);
  escalacao.appendChild(newUl);

  const posicao = document.getElementById("posicao");
  const posicaoJogador = posicao.value;

  const numero = document.getElementById("numero");
  const numeroJogador = numero.value;
  newLi.innerText +=
    "Nome: " +
    nomeJogador +
    "\n" +
    " Posição: " +
    posicaoJogador +
    "\n" +
    " Numero: " +
    numeroJogador;

  document.getElementById("nome").value = "";
  document.getElementById("posicao").value = "";
  document.getElementById("numero").value = "";
}

function confirmar() {
  const escalaFinal = document.getElementById("escalaFinal");
  const escalacao = document.getElementById("escalacao");
  escalaFinal.appendChild(escalacao);

  document.getElementById("nome").value = "";
  document.getElementById("posicao").value = "";
  document.getElementById("numero").value = "";
}

function removeJogador() {
  const escalacao = document.getElementById("escalacao");
  const remover = document.getElementById("numero").value;

  for (let i = 0; i < escalacao.children.length; i++) {
    let li = escalacao.children[i];
    let numero = li.textContent.match(/Numero: (\d+)/)[1];

    if (remover == numero) {
      escalacao.removeChild(li);
    }
    document.getElementById("remover").value = "";
  }
  document.getElementById("nome").value = "";
  document.getElementById("posicao").value = "";
  document.getElementById("numero").value = "";
}
