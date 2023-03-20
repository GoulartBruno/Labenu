import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #1dc690;
  padding: 8px;
  margin: 10px;
  width:400px;
  display:flex;
  justify-content: center;
  background-color:  ${(props) => props.backgroudColor};
  color: ${(props) => props.textColor}
  
  
`;
