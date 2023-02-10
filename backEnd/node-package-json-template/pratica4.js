const nome = process.argv[2];
const age = process.argv[3];

if (!nome || !age) {
  console.log("Faltou o argumento esperado");
} else {
  console.log(
    `Olá, ${nome}! você tem ${age} anos e daqui a 7 anos você terá ${+age + 7}.`
  );
}
