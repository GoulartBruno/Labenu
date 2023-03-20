import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = ["Bruno", "Michelle"];
  const apresentaGaragem = () => {
    alert(`boas vindas a garagem do ${nome}`);
  };
  const carro1 = {
    nome: "X6",
    cor: "Branco",
    ano: "2015",
    flex: true,
  };
  const carro2 = {
    nome: "A3",
    cor: "Preto",
    ano: "2015",
    flex: false,
  };
  const carro3 = {
    nome: "EQS",
    cor: "Azul",
    ano: "2012",
    flex: false,
  };
  const carro4 = {
    nome: "Ferrari",
    cor: "Branco",
    ano: "2022",
    flex: false,
  };
  const novoCarro01 = {
    nome: "Fusca",
    cor: "Prata",
    ano: "2019",
    flex: false,
  };
  const novoCarro02 = {
    nome: "Chevette",
    cor: "Preto",
    ano: "1982",
    flex: false,
  };
  const novoCarro03 = {
    nome: "Kadett",
    cor: "Vermelho",
    ano: "2019",
    flex: true,
  };
  const novoCarro04 = {
    nome: "X1",
    cor: "Branco",
    ano: "2022",
    flex: true,
  };

  return (
    <div className="App">
      <Garagem
        nome={nome}
        apresentaGaragem={apresentaGaragem}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />
      <Garagem
        nome={nome}
        apresentaGaragem={apresentaGaragem}
        carro1={novoCarro01}
        carro2={novoCarro02}
        carro3={novoCarro03}
        carro4={novoCarro04}
      />
    </div>
  );
}
