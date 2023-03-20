import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Footer = styled.footer`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;

export const PainelDeVideos = styled.section`
  flex-direction: column;
  background: #829999;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 10px;
`;
