import { createGlobalStyle } from "styled-components";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
    }
`

function App() {
  return (
    <>
        <GlobalStyle />

        <main>
            <ProductCard />
            <hr />
            <UserCard />
        </main>
    </>
  );
}

export default App;
