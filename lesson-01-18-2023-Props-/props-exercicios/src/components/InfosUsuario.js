import React from "react";
import "../styles.css";

export default function InfosUsuario(props) {
  return (
    <div id="card">
      <img id="autor" src={props.user.fotoUser} />
      <h4>{props.user.autor}</h4>
    </div>
  );
}
