import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from "axios";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri",
  },
  {
    id: 2,
    name: "Paulinha",
  },
  {
    id: 3,
    name: "Marcelo",
  },
  {
    id: 4,
    name: "Rodrigo",
  },
];

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const headers = {
    headers: {
      Authorization: "bruno-goulart-conway",
    },
  };
  const recebeUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers
      )
      .then((resposta) => {
        setUsuarios(resposta.data);
      })
      .catch((erro) => {
        // alert("deu ruim");
        alert(erro.response.data);
        console.log(erro.response.data);
      });
  };

  useEffect(() => {
    recebeUsuarios();
  }, []);

  return (
    <>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer">
          API Labenusers
        </a>
      </p>
      <AddUsuario recebeUsuarios={recebeUsuarios} />
      <hr />
      {usuarios.map((usuario) => {
        return (
          <Usuario
            key={usuario.id}
            usuario={usuario}
            recebeUsuarios={recebeUsuarios}
          />
        );
      })}
    </>
  );
}

export default App;
