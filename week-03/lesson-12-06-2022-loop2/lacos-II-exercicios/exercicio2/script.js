let tabuada = prompt(`Digite um número para saber a tabuada.`);
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`A tabuada de ${tabuada} é:`);
for (let i in valores) {
  console.log(`${tabuada} x ${valores[i]}= ${tabuada * valores[i]}`);
}
