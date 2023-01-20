import React from "react";
import CardVideo from "../CardVideo/CardVideo";

import { MyMain, MenuVertical, PainelDeVideos } from "./style";

export default function Main() {
  const infoVideo01 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Street Berlin",
  };
  const infoVideo02 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "Sunset Mallorca.",
  };
  const infoVideo03 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Dusk Frankfurt.",
  };
  const infoVideo04 = {
    imagem: "https://picsum.photos/400/400?a=4 ",
    titulo: "Madrid.",
  };
  const infoVideo05 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "Forest Oslo.",
  };
  const infoVideo06 = {
    imagem: "https://picsum.photos/400/400?a=6 ",
    titulo: "Bridge, London.",
  };
  const infoVideo07 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "Barcelona.",
  };
  const infoVideo08 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "Houston.",
  };

  const user01 = { autor: "Julio", fotoUser: "https://i.pravatar.cc/330" };
  const user02 = { autor: "Bruno", fotoUser: "https://i.pravatar.cc/320" };
  const user03 = { autor: "Michelle", fotoUser: "https://i.pravatar.cc/200" };
  const user04 = { autor: "Henrique", fotoUser: "https://i.pravatar.cc/300" };
  const user05 = { autor: "Camila", fotoUser: "https://i.pravatar.cc/350" };
  const user06 = { autor: "Leticia", fotoUser: "https://i.pravatar.cc/30" };
  const user07 = { autor: "Roberto", fotoUser: "https://i.pravatar.cc/301" };
  const user08 = { autor: "Felipe", fotoUser: "https://i.pravatar.cc/306" };
  return (
    <MyMain>
      <MenuVertical>
        <ul>
          <li BotoesMenuVertical>Início</li>
          <li BotoesMenuVertical>Em alta</li>
          <li BotoesMenuVertical>Inscrições</li>
          <hr />
          <li BotoesMenuVertical>Originais</li>
          <li BotoesMenuVertical>Histórico</li>
        </ul>
      </MenuVertical>
      <PainelDeVideos>
        <CardVideo infoVideo={infoVideo01} user={user01} />
        <CardVideo infoVideo={infoVideo02} user={user02} />
        <CardVideo infoVideo={infoVideo03} user={user03} />
        <CardVideo infoVideo={infoVideo04} user={user04} />
        <CardVideo infoVideo={infoVideo05} user={user05} />
        <CardVideo infoVideo={infoVideo06} user={user06} />
        <CardVideo infoVideo={infoVideo07} user={user07} />
        <CardVideo infoVideo={infoVideo08} user={user08} />
      </PainelDeVideos>
    </MyMain>
  );
}
