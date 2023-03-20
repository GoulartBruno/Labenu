import axios from "axios";
import React, { useEffect, useState } from "react";

function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState(usuario.name);
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const headers = {
    headers: {
      Authorization: "bruno-goulart-conway",
    },
  };
  const recebeUsuarioPorId = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then((resposta) => {
        setUsuario(resposta.data);
        setEmail(resposta.data.email);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const editaUsuario = () => {
    const novoUsuario = {
      name: nome,
      email: email,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        novoUsuario,
        headers
      )
      .then((resposta) => {
        console.log(resposta);
        recebeUsuarioPorId(usuario.id);
        setEditar(false);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const removeUsuario = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then(() => {
        props.recebeUsuarios();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    recebeUsuarioPorId(usuario.id);
  }, []);
  return (
    <>
      {editar ? (
        <div>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={editaUsuario}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p>Nome: {usuario.name}</p>
          <p>E-mail: {usuario.email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => removeUsuario(usuario.id)}>Excluir</button>
    </>
  );
}

export default Usuario;
