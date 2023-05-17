import axios from "axios";
import ProductCard from "../components/ProductCard";

import { render, screen, waitFor } from "@testing-library/react";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    title: "MacBook",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
};

describe("Teste Product Card", () => {
  beforeEach(() => {
    axios.mockReset();
  });
  //   test("Renderiza Página", async () => {
  //     axios.get.mockResolvedValueOnce(axiosResponseMock);

  //     render(<ProductCard />);

  //     screen.debug();

  //     await waitFor(() => {});

  //     screen.debug();
  //   });
  //   test("deve renderizar o loanding inicialmente", async () => {
  //     axios.get.mockResolvedValueOnce(axiosResponseMock);

  //     render(<ProductCard />);

  //     screen.debug();

  //     const loading = screen.getByText("Loading...");

  //     expect(loading).toBeInTheDocument();
  //     expect(screen.queryByText("MacBook")).not.toBeInTheDocument();

  //     await waitFor(() => {});
  //   });
  test("deve renderizar os dados do produto", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    screen.debug();

    await waitFor(() => {
      expect(screen.getByText("MacBook")).toBeInTheDocument();
      expect(
        screen.getByText(
          "MacBook Pro 2021 with mini-LED display may launch between September, November"
        )
      ).toBeInTheDocument();
    });
    expect(screen.getByText("$1749")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Thumbnail for MacBook/i }));

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    screen.debug();
  });
});
