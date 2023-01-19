import React from "react";
import "./style";
import { Card, PhotoAutor, Autor } from "./style";

export default function InfosUsuario(props) {
  return (
    <Card id="card">
      <PhotoAutor id="autor" src={props.user.fotoUser} />
      <Autor>{props.user.autor}</Autor>
    </Card>
  );
}
