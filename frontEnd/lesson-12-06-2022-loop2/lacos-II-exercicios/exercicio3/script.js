const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
console.log(`Lista dos maiores países do mundo.`);
for (let i of maioresPaises) {
  console.log(`${maioresPaises.indexOf(i) + 1}° maior país do mundo: ${i}`);
}
