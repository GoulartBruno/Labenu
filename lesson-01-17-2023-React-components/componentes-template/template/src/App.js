import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Garagem } from "./components/Garagem";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Aula - Componentes React</h1>
      <Garagem />
      <Garagem />
      <Garagem />
      <Footer />
    </div>
  );
}
