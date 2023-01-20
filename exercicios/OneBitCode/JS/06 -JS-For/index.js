//
// for (let i = 1; i <= 20; i++) {
//   console.log(`
//   ${i * 1} x 2 = ${(resultado = i * 1)}
//   ${i * 2} x 3 = ${(resultado = i * 2)}
//   ${i * 3} x 4 = ${(resultado = i * 3)}
//   ${i * 4} x 5 = ${(resultado = i * 4)}
//   ${i * 5} x 6 = ${(resultado = i * 5)}
//   ${i * 6} x 7 = ${(resultado = i * 6)}
//   ${i * 7} x 8 = ${(resultado = i * 7)}
//   ${i * 8} x 9 = ${(resultado = i * 8)}
//   ${i * 9} x 10 = ${(resultado = i * 9)}
//   ${i * 10} x 10 = ${(resultado = i * 10)}

//   `);
// }
let resultado = "";

let valor = +prompt("Type a nummer.");

for (let i = 1; i <= 20; i++) {
  resultado = valor * i;
  alert(`${valor} * ${i} = ${resultado} `);
}

// let word = prompt("Type a simple word.");
// let wordReverse = word.split("").reverse().join("");

// if (word === wordReverse) {
//   console.log(`The word ${word} is a palindrome`);
// } else {
//   console.log(`The word ${word} isn´t a palindrome

// The reverse of the word ${word} is ${wordReverse}`);
// }
