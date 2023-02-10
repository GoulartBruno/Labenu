import { countries } from "./countries.js";

const query = process.argv[2];

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  const resul = countries.find((country) => country.name === query);
  console.log(resul);
}
