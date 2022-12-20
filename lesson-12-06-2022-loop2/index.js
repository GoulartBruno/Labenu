/*Em uma escola são aplicadas 4 provas por bimestre, tendo como base o array de cada bimestre, crie um programa que mostre a média e soma das notas de cada bimestre.
Para esse programa, considere o seguinte formato:

bimestre1 = [ nota1, nota2, nota3, nota4 ] 
bimestre2 = [ nota1, nota2, nota3, nota4 ] 
bimestre3 = [ nota1, nota2, nota3, nota4 ] 
bimestre4 = [ nota1, nota2, nota3, nota4 ]

notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

Dica: Para percorrer array dentro de array, utilize dois laços
Como saída o programa deve exibir uma mensagem parecida com essa:

A soma das notas do bimestre 1 é: 40
A média do bimestre 1 é: 10

Exiba a mensagem para cada um dos bimestres*/

const bimestre1 = [5, 8, 6, 3];
const bimestre2 = [4, 7, 2, 10];
const bimestre3 = [7, 8, 6, 9];
const bimestre4 = [9, 4, 7, 6];

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

/*

for (let i = 0; i < notasDoAno.length; i++) {
  let somaNotas = 0;
  let mediaNotas = 0;

  for (let j = 0; j < notasDoAno[i].length; j++) {
    somaNotas += notasDoAno[i][j];
  }
  console.log(`A soma das notas é: ${somaNotas}`);

  mediaNotas = somaNotas / notasDoAno.length;
  console.log(`A médio das notas é: ${mediaNotas}`);
}
*/
/*
for (let i in notasDoAno) {
  let somaNotas = 0;
  let mediaNotas = 0;

  for (let j of notasDoAno[i]) {
    somaNotas += j;
  }
  console.log(`A soma das notas é: ${somaNotas}`);

  mediaNotas = somaNotas / notasDoAno.length;

  console.log(`A médio das notas é: ${mediaNotas}`);
}
*/
//Parte II de laços II

const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

/*

for (let i = 0; i < filmes.length; i++) {
  console.log(
    `Título: ${filmes[i].titulo}\n Ano: ${filmes[i].ano} \n Diretor: ${filmes[i].diretor}`
  );
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator ${j + 1}- ${filmes[i].elenco[j]}`);
  }
}
*/

for (let i in filmes) {
  console.log(
    `Dados do Filme \nTítulo: ${filmes[i].titulo}\n Ano: ${filmes[i].ano}\n Diretor: ${filmes[i].diretor}`
  );
  for (let j of filmes[i].elenco) {
    console.log(`Ator  ${j}`);
  }
}
