let mensagem = document.getElementById("mensagem");

const checaCaps = (event) => {
  if (event.key === "Shift") {
    mensagem = document.getElementById("mensagem").textContent =
      "ATENÇÃO: SEGURANDO SHIFP";
  } else {
    mensagem.innerHTML = "";
  }
};
