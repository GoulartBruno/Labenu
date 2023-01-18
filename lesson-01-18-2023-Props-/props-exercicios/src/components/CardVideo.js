import React from "react";
import "../styles.css";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="painel-de-videos">
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.infoVideo.imagem} alt="" />
        <h4>{props.infoVideo.titulo}</h4>
        <InfosUsuario user={props.user} />
      </div>
    </div>
  );
}
