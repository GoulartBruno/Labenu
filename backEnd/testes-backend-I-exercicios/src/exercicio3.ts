type User = {
  id: number;
  name: string;
  email: string;
};

export const exercicio3: User[] = [
  { id: 1, name: "Astrodev", email: "astrodev@labenu.com.br" },
  { id: 2, name: "João", email: "joao@gmail.com" },
  { id: 3, name: "Maria", email: "maria@yahoo.com" },
  { id: 4, name: "Pedro", email: "pedro@hotmail.com" },
];

const astrodev = exercicio3.find((user) => user.name === "Astrodev");

console.log(astrodev);
