import React, { useEffect, useState } from "react";
import {
  Botao,
  ContainerInputs,
  ContainerMusicas,
  InputMusica,
  Musica,
} from "./styled";
import axios from "axios";

const musicasLocal = [
  {
    artist: "Artista 1",
    id: "1",
    name: "Musica1",
    url: "http://spoti4.future4.com.br/1.mp3",
  },
  {
    artist: "Artista 2",
    id: "2",
    name: "Musica2",
    url: "http://spoti4.future4.com.br/2.mp3",
  },
  {
    artist: "Artista 3",
    id: "3",
    name: "Musica3",
    url: "http://spoti4.future4.com.br/3.mp3",
  },
];

export default function Musicas(props) {
  const [playlist, setPlaylist] = useState(props.playlist);
  const [nome, setNome] = useState(playlist.name);
  const [artista, setArtista] = useState(playlist.artist);
  const [url, setUrl] = useState(playlist.url);

  const headers = {
    headers: {
      Authorization: "bruno-goulart-conway",
    },
  };
  const novaTrack = {
    name: nome,
    artist: artista,
    url: url,
  };
  const [musicas, setMusicas] = useState([]);
  const [musica, setMusica] = useState("");
  const adicionaTracks = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
        novaTrack,
        headers
      )
      .then(() => {
        recebeMusicasPorId();
      })
      .catch((erro) => {
        alert(erro.response);
      });
  };
  const removeTrack = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks/${id}`,
        headers
      )
      .then(() => {
        recebeMusicasPorId();
      })
      .catch((erro) => {
        alert(erro.response);
      });
  };
  const recebeMusicasPorId = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
        headers
      )
      .then((resposta) => {
        setMusicas(resposta.data.result.tracks);
      })
      .catch((erro) => {
        alert(erro.response.data);
        console.log(erro.response.data);
      });
  };
  useEffect(() => {
    recebeMusicasPorId(playlist.id);
  }, []);
  return (
    <ContainerMusicas>
      <h2>{props.playlist.name}</h2>
      {musicas.map((musica) => {
        return (
          <Musica key={musica.id}>
            <h3>
              {musica.name} - {musica.artist}
            </h3>
            <audio src={musica.url} controls />
            <button onClick={() => removeTrack(musica.id)}>X</button>
          </Musica>
        );
      })}
      <ContainerInputs>
        <InputMusica
          onChange={(e) => {
            setNome(e.target.value);
          }}
          placeholder="musica"
        />
        <InputMusica
          onChange={(e) => {
            setArtista(e.target.value);
          }}
          placeholder="artista"
        />
        <InputMusica
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="url"
        />
        <Botao onClick={adicionaTracks}>Adicionar musica</Botao>
      </ContainerInputs>
    </ContainerMusicas>
  );
}
