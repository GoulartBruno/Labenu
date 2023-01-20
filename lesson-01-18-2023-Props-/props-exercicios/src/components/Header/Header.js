import React from "react";
import { Cabecalho } from "./style";

export default function Header() {
  return (
    <Cabecalho>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </Cabecalho>
  );
}
