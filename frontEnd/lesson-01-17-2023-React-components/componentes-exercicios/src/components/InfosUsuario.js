import React from "react";
import "../styles.css";
import autor from "../img/Goethe.jpg";

export default function InfosUsuario() {
  return (
    <div id="card">
      <h6>Autor: Bruno Goulart</h6>
      <img id="autor" src={autor} />
    </div>
  );
}
