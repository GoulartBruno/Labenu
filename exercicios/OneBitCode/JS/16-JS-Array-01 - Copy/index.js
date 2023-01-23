const imoveis = [];
let comando = +"";
do {
  comando = prompt(` Existem ${imoveis.length} imóveis cadastrados.

Escolha uma opção:
1 - Salvar um imóveis
2 - Mostrar todos os imóveis
3 - Sair
`);
  switch (comando) {
    case "1":
      const imovel = {};

      imovel.nome = prompt("Qual o nome do proprietadio?");
      imovel.quartos = prompt("Qual a quantidade de quartos da casa?");
      imovel.banheiros = prompt("Quantos banheiros possue?");
      imovel.garagem = prompt("Possue garagem?");

      const salvar = confirm("Você quer salvar o imóvel?");
      if (salvar) {
        imoveis.push(imovel);
      } else {
        alert("Imóvel não salvo");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++)
        alert(`Os imóveis são: 
       ${i + 1}° imóvel:
       Proprietário= ${imoveis[i].nome}
       Quartos= ${imoveis[i].quartos}
       Banaheiros= ${imoveis[i].banheiros}
       Possue garagem:${imoveis[i].garagem}`);
      break;
    case "3":
      alert("Voce está saindo.");
      break;
    default:
      alert("Comando errado");
  }
} while (comando !== "3");
1;
