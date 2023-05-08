import { pratica3 } from "../src/pratica3";

describe("teste da pratica3.ts", () => {
  test("Verificar se recebe dois números e retorna um objeto com duas propriedades a soma", () => {
    const result = pratica3(3, 5);
    const expetedResult = {
      soma: 8,
      mult: 15,
    };

    expect(result).toEqual(expetedResult);
  });
});
