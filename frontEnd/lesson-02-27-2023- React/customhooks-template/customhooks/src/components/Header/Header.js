import logo from "../../assets/logo.gif";

import { StyledHeader } from "./style.js";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <h2>Labenomes</h2>
    </StyledHeader>
  );
};