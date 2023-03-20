import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 20px;
  width: 100vw;
  padding: 10px;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const InputContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 5px;
  input {
    width: 250px;
    height: 30px;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const SaveButton = styled.button`
  height: 35px;
  background-color: #1dc690;
  border-radius: 10px;
  color: white;
  border: none;
`;

export const CloseButton = styled.button`
  height: 35px;
  background-color: #3867dc;
  border-radius: 10px;
  color: white;
  border: none;
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const ButtonNome = styled.button`
  width: 500px;
  height: 50px;
  background: #278ab0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: #ffffff;
  border: none;
`;

export const DeleteButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: #f58181;
  border-radius: 10px;
  border: none;
  margin-left: 5px;
`;
