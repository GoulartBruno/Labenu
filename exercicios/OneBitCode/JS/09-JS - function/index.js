let menu = "";
let valorFinal = " ";

function areaTriangulo() {
  const base = +prompt("valor da base");
  const altura = +prompt("valor da altura");
  return alert(`A área do triangulo é ${(valorFinal = (base * altura) / 2)}`);
}

function areaRetangulo() {
  const base = +prompt("valor da base");
  const altura = +prompt("valor da altura");
  return alert(`A área do Retangulo é ${(valorFinal = base * altura)}`);
}

function areaQuadrado() {
  const base = +prompt("valor da base");
  valorFinal = base * base;
  return alert(`A área do Quadrado é ${(valorFinal = base * base)}`);
}

function areaTrapezio() {
  const baseMaior = +prompt("Valor da Base Maior");
  const baseMenor = +prompt("Valor da Base Menor");
  altura = +prompt("Valor da altura");
  return alert(
    `A área do Trapezio é ${(valorFinal =
      ((baseMaior + baseMenor) * altura) / 2)}`
  );
}

function areaCirculo() {
  const raio = +prompt("Valor do raio");
  return alert(`A área do Circulo é ${(valorFinal = +(raio * raio) * 3.14)}`);
}

function executa() {
  do {
    menu = prompt(`Escolha uma opção para saber a área:
1- Área do triâgulo.
2- Área do retângulo.
3- Área do quadrado.
4- Área do trapézio.
5- Área do criculo
6- Sair`);

    switch (menu) {
      case "1":
        areaTriangulo();
        break;
      case "2":
        areaRetangulo();
        break;
      case "3":
        areaQuadrado();
        break;
      case "4":
        areaRetangulo();
        break;
      case "5":
        areaCirculo();
        break;
      case "6":
        alert("Saindo");
        break;
      default:
        alert("Opçao falsa, digite outro número.");
    }
  } while (menu !== "6");
}

executa();
