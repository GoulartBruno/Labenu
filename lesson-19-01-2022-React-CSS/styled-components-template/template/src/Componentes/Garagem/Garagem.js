import { Carro } from "../Carro/Carro";
import {
  Botao,
  GaragemContainer,
  TitleVeiculos,
  Estacionamento,
  Header,
  Carros,
} from "./style";

export function Garagem(props) {
  return (
    <div>
      <Header>
        <h1>Garagem da {props.nome}</h1>
        <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>
      </Header>

      <GaragemContainer>
        <Estacionamento>
          <TitleVeiculos>
            <h1>Garagem da {props.veiculos[0]}</h1>
          </TitleVeiculos>
          <Carros>
            <Carro
              marca={"Volkswagen"}
              adicionadoPor={props.nome}
              cor={"Vermelho"}
              ano={2022}
              flex={"true"}
            />
            <Carro
              marca={"Ford"}
              adicionadoPor={props.nome}
              cor={"Verde"}
              ano={2020}
              flex={"false"}
            />
            <Carro
              marca={"Bmw"}
              adicionadoPor={props.nome}
              cor={"Amarelo"}
              ano={2009}
              flex={"false"}
            />
            <Carro
              marca={"Jeep"}
              adicionadoPor={props.nome}
              cor={"Rosa"}
              ano={2022}
              flex={"true"}
            />
          </Carros>
        </Estacionamento>
        <Estacionamento>
          <TitleVeiculos>
            <h1>Garagem da {props.veiculos[1]}</h1>
          </TitleVeiculos>
          <Carros>
            <Carro
              adicionadoPor={props.nome}
              cor={"Vermelho"}
              ano={2022}
              flex={"true"}
            />
            <Carro
              adicionadoPor={props.nome}
              cor={"Verde"}
              ano={2020}
              flex={"false"}
            />
          </Carros>
        </Estacionamento>
      </GaragemContainer>
    </div>
  );
}
