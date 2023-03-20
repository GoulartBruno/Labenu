import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Foote1 from "./components/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header Header={Header} />
      <Main Main={Main} />
      <Footer Footer={Foote1} />
    </div>
  );
}
