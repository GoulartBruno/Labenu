const lista = document.getElementById("lista");

const novoItem = document.createElement("li");
novoItem.innerHTML = "Item 0";

lista.insertAdjacentElement("afterbegin", novoItem);
