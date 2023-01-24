let opcao;
let Vagas = [];
let numeroCandidaturas = "";

function menu() {
  opcao = prompt(
    "Escolha uma das opções a seguir: \n1-Listar vagas disponíveis  \n2-Criar uma nova vaga \n3-Visualizar uma vaga \n4-Inscrever um candidato em uma vaga \n5-Excluir uma vaga \n6-Sair"
  );
}
do {
  menu();
  switch (opcao) {
    case "1":
      listarVagas();
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      visualizarVagas();
      break;
    case "4":
      candidaturas();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      encerrar();
      break;
  }
} while (opcao != 6);

function listarVagas() {
  let iterarVagas = Vagas.map(function (iterar, index) {
    alert(
      "Vagas disponíveis: " +
        iterar.nomeVaga +
        "\nO indice da vaga é: " +
        (index + 1) +
        "\nQuantidade de candidatos por vaga:"
    );
  });
}

function criarVaga() {
  var listaDeVagas = {};
  listaDeVagas.nomeVaga = prompt(
    "-----Criando uma nova Vaga  !!!!-----                                                        \nDigite o nome da vaga"
  );
  listaDeVagas.descricao = prompt("Digite uma descrição para a vaga: ");
  Vagas.push(listaDeVagas);
}

function visualizarVagas() {
  alert("Vagas Disponíveis ... ");
  const indice = Vagas.indexOf(prompt("Digite o indice"));
  alert(indice);
}
function candidaturas() {
  listaDeVagas.nomecandidato = prompt("Olá candidato, insira seu nome: ");
  confirm("Deseja realizar a candidatura?");
  numeroCandidaturas += 1;
}

function excluirVaga() {
  alert("Excluindo Vaga !!!");
  Vagas.pop();
}

function encerrar() {
  alert("Encerrando programa !!!");
}
