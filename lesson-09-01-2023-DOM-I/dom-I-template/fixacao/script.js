const textoParagrafo = document.getElementById("paragrafo");
console.log(textoParagrafo.innerHTML);

const imprimirValor = () => {
  console.log(document.getElementById("texto").value);
};

const mudarValorParagrafo = () => {
  textoParagrafo.innerHTML = document.getElementById("texto").value;
};
