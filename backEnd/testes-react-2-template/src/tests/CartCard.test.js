import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartCard from "../components/Cart/CartCard";

const cartCardMock = {
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  title: "bolsa",
  price: 99.9,
  quantity: 1,
};

const removeFromCarttMock = jest.fn();

describe("Testes CartCard", () => {
  test("Renderizar o componente", () => {
    render(
      <CartCard removeFromCart={removeFromCarttMock} product={cartCardMock} />
    );
  });
  test("deve renderizar a imagem, titulo, preço, quantidade e botao de remover", () => {
    render(
      <CartCard removeFromCart={removeFromCarttMock} product={cartCardMock} />
    );

    const image = screen.getByRole("img", { name: /bolsa/i });
    const title = screen.getByRole("heading", { name: /bolsa/i });
    const price = screen.getByText(/\$99\.90/i);
    const buttonRemove = screen.getByRole("button", { name: /remove/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonRemove).toBeInTheDocument();
  });

  test("quando o botão de remover for clicado, deve remover o produto no carrinho", async () => {
    const user = userEvent.setup();
    render(
      <CartCard removeFromCart={removeFromCarttMock} product={cartCardMock} />
    );
    const buttonRemove = screen.getByRole("button", { name: /remove/i });

    await user.click(buttonRemove);

    expect(removeFromCarttMock).toBeCalled();
    expect(removeFromCarttMock).toHaveBeenCalled();
    expect(removeFromCarttMock).toBeCalledWith(cartCardMock);
    expect(removeFromCarttMock).toBeCalledTimes(1);
  });
});
