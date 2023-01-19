import React from "react";
import InfosUsuario from "../InfosUsuario/InfosUsuario";
import { PainelDeVideos, PaginaPrincipalVideos, PhotoPaisagem } from "./style";

export default function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <PaginaPrincipalVideos onClick={reproduzVideo}>
      <PhotoPaisagem src={props.infoVideo.imagem} alt="" />
      <h4>{props.infoVideo.titulo}</h4>
      <InfosUsuario user={props.user} />
    </PaginaPrincipalVideos>
  );
}
