import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

if (!name || !code) {
  console.log("Faltou o argumento esperado");
} else {
  const newCountry = {
    name,
    code,
  };
  countries.push(newCountry);
  countries.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );
  console.log(countries);
}
