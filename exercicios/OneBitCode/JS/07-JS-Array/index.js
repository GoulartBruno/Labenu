let pacientes = ["Bruno", "Pedro", "Rafael", "Marcos", "Fabio", "Lucas"];
let comandos = "";
let novoPaciente = "";

for (let i = 0; i < pacientes.length; i++) {
  console.log(`Pacientes:
${i + 1}° - ${pacientes[i]}`);
}

while (comandos !== 3) {
  comandos = +prompt(`Escolha uma opção:
1- Novo Paciente
2- Consultar paciente
3- Sair`);
  if (comandos === 1) {
    novoPaciente = prompt("Qual o nome do novo paciente");
    pacientes.push(novoPaciente);
  } else if (comandos === 2) {
    console.log(`Consultando paciente ${pacientes[0]}`);
    pacientes.shift();
  }
}

console.log(pacientes);

// let cartas = [" 7", " 5", " 4", " 12", " 10", " 39"];
// let comandos = "";
// let addRemove = " ";

// while (comandos !== 3) {
//   comandos =
//     +prompt(` O baralho tem essas cartas ${cartas}, o que você quer fazer?
// Escolha uma opção:
//  1- Adicionar uma carta
//  2- Puxar uma Carta
// 3- Sair`);
//   if (comandos === 1) {
//     addRemove = prompt("Qual o número da nova carta?");
//     cartas.unshift(addRemove);
//     console.log(cartas);
//   } else if (comandos === 2) {
//     let remove = cartas.shift();
//     console.log(`A carta é ${remove}`);
//     console.log(remove);
//   }
// }
