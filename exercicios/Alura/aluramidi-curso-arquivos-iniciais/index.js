function tocaSom(seletorAudio) {
  const elemente = document.querySelector(seletorAudio);

  if (elemente && elemente.localName === "audio") {
    elemente.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;

// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];

//   console.log(instrumento);

//   const idAudio = `#som_${instrumento}`;

//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };
//   contador += 1;
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      listaDeTeclas[contador].classList.add("ativa");
    }
    tecla.onkeyup = function () {
      listaDeTeclas[contador].classList.remove("ativa");
    };
  };
  //adiciona classe chamada ativa que deixa as teclas vermelhas enquanto segura digita a tecla espaço

  //remove classe chamada ativa que deixa as teclas vermelhas quando para de apertar a tecla espaço
}
