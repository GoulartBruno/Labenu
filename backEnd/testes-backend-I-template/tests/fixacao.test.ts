import { fixacao } from "../src/fixacao";

describe("testando o exercicio de fixação", () => {
  test("Vericando se a função funciona", () => {
    const string = "bruno";

    const stringSeparada = fixacao(string);

    const stringEsperada = ["b", "r", "u", "n", "o"];

    expect(stringSeparada).toEqual(stringEsperada);
  });
});
