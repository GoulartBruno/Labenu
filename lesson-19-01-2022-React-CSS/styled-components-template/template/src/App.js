import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const nome = "Labenu";
  const veiculos = ["Carros", "Motos"];

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Garagem
        veiculos={veiculos}
        nome={nome}
        mensagemAprentacao={apresentaGaragem}
      />
    </div>
  );
}
