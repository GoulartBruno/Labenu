import { exercicio2 } from "../src/exercicio2";

describe("Testes da exercicio1.ts", () => {
  test("verificar se o dado de entrada é string e o dado de saida é number ", () => {
    const result = exercicio2("2022/09/26");

    expect(result).toBe("26/09/2022");
  });
});
