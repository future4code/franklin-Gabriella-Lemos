import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.input`
  width: 250px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.button`
  margin-bottom: 20px;
`;
function App() {
  const [state, setState] = useState([
    {
      nome: "robertinha",
      fotoUser: "https://picsum.photos/50/50",
      fotoPostagem: "https://picsum.photos/200/151",
    },
    {
      nome: "gustavo",
      fotoUser: "https://picsum.photos/50/51",
      fotoPostagem: "https://picsum.photos/200/152",
    },
    {
      nome: "renatinha",
      fotoUser: "https://picsum.photos/50/52",
      fotoPostagem: "https://picsum.photos/200/153",
    },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputFotoUser, setInputFotoUser] = useState("");
  const [inputFotoPost, setInputFotoPost] = useState("");

  const listadePessoas = state.map((pessoa) => {
    return (
      <Post
        nomeUsuario={pessoa.nome}
        fotoUsuario={pessoa.fotoUser}
        fotoPost={pessoa.fotoPostagem}
      />
    );
  });

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const handleInputFotoUser = (event) => {
    setInputFotoUser(event.target.value);
  };

  const handleInputFotoPost = (event) => {
    setInputFotoPost(event.target.value);
  };

  const adicionaPessoa = () => {
    const novaPessoa = {
      nome: inputName,
      fotoUser: inputFotoUser,
      fotoPostagem: inputFotoPost,
    };

    const novaPessoas = [...state, novaPessoa];

    setState(novaPessoas);
    setInputName("");
    setInputFotoUser("");
    setInputFotoPost("");
  };

  return (
    <MainContainer>
      <div>{listadePessoas}</div>
      <InputContainer
        onChange={handleInputName}
        value={inputName}
        placeholder="Name"
      ></InputContainer>
      <InputContainer
        onChange={handleInputFotoUser}
        value={inputFotoUser}
        placeholder="Name"
      ></InputContainer>
      <InputContainer
        onChange={handleInputFotoPost}
        value={inputFotoPost}
      ></InputContainer>
      <ButtonContainer onClick={adicionaPessoa}>Adicionar</ButtonContainer>
    </MainContainer>
  );
}

export default App;
