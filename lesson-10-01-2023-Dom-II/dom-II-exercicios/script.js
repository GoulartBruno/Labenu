const container = document.getElementById("container");
const style = document.querySelector(".item");

const adicionaItem = (event) => {
  const texto = document.createElement("h3");
  texto.innerHTML = "Novo item";
  container.appendChild(texto);
  texto.classList.add("item");
  texto.setAttribute("onclick", "removeItem(event)");
};

const removeItem = (event) => {
  event.target.remove();
};
