const lista = document.getElementById("lista");

// const input = document.getElementById("meu-input");
const insereItem = (event) => {
  event.preventDefault(); //nao recarregar
  let input = document.getElementById("meu-input").value;
  const novaLista = document.createElement("li");
  novaLista.innerHTML = input;
  lista.appendChild(novaLista);
  document.getElementById("meu-input").value = "";
};
