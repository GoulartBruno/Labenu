import { exercicio1 } from "../src/exercicio1";

describe("Testes da exercicio1.ts", () => {
  test("verificar se o dado de entrada é string e o dado de saida é number ", () => {
    const result = exercicio1("10" as string);

    expect(result).toBe(10);
  });
});
