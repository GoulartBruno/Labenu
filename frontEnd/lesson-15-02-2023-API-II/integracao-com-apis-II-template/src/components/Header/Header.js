import logo from "../../assets/logo.png";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} />
      <h2>Labenusers</h2>
    </StyledHeader>
  );
};
