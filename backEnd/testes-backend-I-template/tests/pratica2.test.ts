import { pratica2 } from "../src/pratica2";

describe("Testes da pratica2.ts", () => {
  test("verificar se o dado de entrada for diferente de number ele retorna null ", () => {
    const result = pratica2("10" as any);

    expect(result).toBe(null);
    expect(result).toEqual(null);
  });
});
test("Verificar se o dado de entrada não for inteiro, retorna null ", () => {
  const result = pratica2(11.5);

  expect(result).toBeNull();
});

test("Verificar se o dado de entrada é par ", () => {
  const result = pratica2(10);

  expect(result).toBe(true);
});
test("Verificar se o dado de entrada é impar ", () => {
  const result = pratica2(11);

  expect(result).toBe(false);
});
