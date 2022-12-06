const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

for (let i in array) {
  console.log(`Temporada ${+i + 1}`);
  let soma = 0;
  let media = 0;

  for (let j in array[i]) {
    console.log(`Gols na ${+j + 1} Temporada é: ${array[i][j]}`);
    soma += array[i][j];
  }
  console.log(`A soma de gols é:${soma}`);
  media = (soma / array.length).toFixed(0);
  console.log(`A média de gols é ${media} `);
}
