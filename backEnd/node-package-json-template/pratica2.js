import { countries } from "./countries.js";

const query = process.argv[2];

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  const resul = countries.filter(
    (country) => country.name[0].includes() === query
  );
  console.log(resul);
}
