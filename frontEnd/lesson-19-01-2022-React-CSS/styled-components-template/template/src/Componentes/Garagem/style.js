import styled from "styled-components";

export const Botao = styled.button`
  border: none;
  background-color: orange;
  padding: 8px;

  :hover {
    cursor: pointer;
  }
`;

export const GaragemContainer = styled.main`
  height: 80vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const Estacionamento = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  display: flex;
  gap: 2rem;
`;

export const Header = styled.section`
  font-family: sans-serif;
  height: 10vh;
  color: white;
  background-color: #fa993c;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
  }
`;
export const TitleVeiculos = styled.div`
  font-family: sans-serif;
  height: 2rem;
`;

export const Carros = styled.div`
  border-radius: 10px;
  display: flex;
  width: 80%;
  height: 60vh;
  background-color: gray;
  gap: 40px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
