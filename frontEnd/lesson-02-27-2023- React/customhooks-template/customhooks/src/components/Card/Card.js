
import { CardContainer } from "./style";

export const Card = ({text, backgroudColor, textColor}) => {
  return (
    <CardContainer backgroudColor={backgroudColor} textColor={textColor}>
   
      <p>{text}</p>
    </CardContainer>
  );
};