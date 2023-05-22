import axios from "axios";
import UserCard from "../components/UserCard";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("axios");
const axiosRespondeMock = {
  data: {
    firstName: "Oleta",
    lastName: "Abbott",
    bank: {
      cardExpire: "10/23",
      cardNumber: "3589640949470047",
    },
  },
};
describe("Teste User Card", () => {
  beforeEach(() => {
    axios.mockReset();
  });
  test("Renderiza Página", async () => {
    axios.get.mockResolvedValueOnce(axiosRespondeMock);
    render(<UserCard />);
    screen.debug();
    await waitFor(() => {});
    screen.debug();
  });
  test("deve renderizar o loanding inicialmente", async () => {
    axios.get.mockResolvedValueOnce(axiosRespondeMock);
    render(<UserCard />);
    screen.debug();
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
    expect(screen.queryByText("Oleta")).not.toBeInTheDocument();
    await waitFor(() => {});
  });
  test("deve renderizar os dados do usuário", async () => {
    axios.get.mockResolvedValueOnce(axiosRespondeMock);

    render(<UserCard />);

    screen.debug();

    await waitFor(() => {
      expect(screen.getByText("Oleta Abbott")).toBeInTheDocument();
      expect(screen.getByText("10/23")).toBeInTheDocument();
      expect(screen.getByText("3589 6409 4947 0047")).toBeInTheDocument();
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      screen.debug();
    });
  });
});
