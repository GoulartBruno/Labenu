import styled from "styled-components";

export const InputCadastro = styled.input`
  width: 300px;
  height: 20px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 10px;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h3 {
    font-family: sans-serif;
    font-size: 30px;
  }
  button {
    background-color: #1dc690;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 25px;
    border: none;
  }
`;
