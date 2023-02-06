import styled from "styled-components";


export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  width: 100vw
`;
export const ContainerBarra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;
export const ButtonCadastro = styled.button`
  background-color: #1dc690;
  height: 50px;
  width: 281px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 30px;
  border: none;
`;

export const Input = styled.input`
  width: 281px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px 0px 20px;
  font-size: 20px;
  border: none;
  padding-left: 15px;
`;

export const BoxCadastro = styled.div`
box-sizing: border-box;
position: absolute;
width: 500px;
height: 350px;
left: 256px;
top: 150px;
background: #FFFFFF;
border: 0.5px solid #A09E9E;
button {
  background-color: #1dc690;
  height: 30px;
  width: 100px;
  color: #ffffff;
  font-size: 18px;
  border: none;
}
`;
