import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import { Title, NameContainer, PostContainer } from "./style";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
function App() {
  const [nomeUsuarios, setNomeUsuarios] = useState([]);
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}users`)
      .then((response) => {
        setNomeUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {nomeUsuarios.map((usuario) => {
          return (
            <Card
              key={usuario.id}
              text={usuario.name}
              backgroudColor={"nome"}
              textColor={"nome"}
            />
          );
        })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {postagens.map((post) => {
          //console.log(post);
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={"#1dc690"}
              textColor={"#ffffff"}
            />
          );
        })}
      </PostContainer>
    </div>
  );
}

export default App;
