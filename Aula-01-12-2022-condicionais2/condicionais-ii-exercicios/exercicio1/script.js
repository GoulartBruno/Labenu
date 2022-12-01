let numero = +prompt("Digíte um número.");

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log(`${numero} é divisível por 2 e por 3`);
  } else {
    console.log(`${numero} é divisível por 2 mas não por 3 `);
  }
} else if (numero % 3 === 0) {
  console.log(`${numero} é divisível por 3 mas não por 2.`);
} else {
  console.log(`${numero} não é divisível nem por 2 nem por 3`);
}
