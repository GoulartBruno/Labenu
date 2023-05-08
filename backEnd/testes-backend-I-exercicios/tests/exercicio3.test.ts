import { exercicio3 } from "../src/exercicio3";

describe("Testes da exercicio3.ts", () => {
  test("Astrodev está presente na lista de usuários", () => {
    const astrodev = exercicio3.find((user) => user.name === "Astrodev");
    expect(astrodev).toBeDefined();
  });
});
