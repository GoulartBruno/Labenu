import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductsList/ProductCard";
import userEvent from "@testing-library/user-event";

//criar mocks

const productMock = {
  id: "001",
  title: "bolsa",
  price: 99.9,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const addToCartMock = jest.fn(); // mesma coisa que uma funçao
//fazer os testes

describe("Teste do Product Card", () => {
  test("Renderizar o componente", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);
  });
  test("deve renderizar a imagem, titulo, preco e botao de comprar", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />); //primeiro renderiza

    const image = screen.getByRole("img", { name: /bolsa/i });
    const title = screen.getByRole("heading", { name: /bolsa/i });
    const price = screen.getByText(/\$99\.90/i);
    const buttonBuy = screen.getByRole("button", { name: /buy/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonBuy).toBeInTheDocument();
  });
  test("quando o botão de comprar for clicado, deve adicionar o produto no carrinho", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={productMock} addToCart={addToCartMock} />); //ja tenho componente, agora preciso procurar o botao

    const buttonBuy = screen.getByRole("button", { name: /buy/i }); //achei o botao, agora o usuário deve testar e assim vamos testar

    await user.click(buttonBuy); //aqui aconteceu o evento em si para o teste, await pois isso pode demorar

    expect(addToCartMock).toBeCalled(); // checa se a função mocada foi chamada
    expect(addToCartMock).toHaveBeenCalled(); // outra forma de fazer o mesmo que a chamada de cima
    expect(addToCartMock).toBeCalledWith(productMock); // garantir que foi passado productMock como argumento
    expect(addToCartMock).toBeCalledTimes(1); // garantir que foi chamada somente uma vez
  });
});
