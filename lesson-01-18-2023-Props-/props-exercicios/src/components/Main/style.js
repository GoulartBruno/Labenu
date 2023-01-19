import styled from "styled-components";

export const MyMain = styled.main`
  display: flex;
`;

export const MenuVertical = styled.div`
  flex-basis: 200px;
  height: 100vh;
  border-right-style: solid;
  border-right-width: thin;
  display: flex;
`;

export const BotoesMenuVertical = styled.div`
  list-style-type: none;
`;

export const PainelDeVideos = styled.section`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center;
  padding: 20px;
  border: 1px solid;
`;
