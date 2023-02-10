import React from "react";
import "../styles.css";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="painel-de-videos">
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=2 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=3 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=4 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=5 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=6 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=7 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=8 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario />
      </div>
    </div>
  );
}
