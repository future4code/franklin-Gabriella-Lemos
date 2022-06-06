import { useState } from "react";
import "./App.css";
import { ButtonSend } from "./buttons/ButtonSend";
import { InputChooseUser } from "./inputs/InputChooseUser";
import { InputMessage } from "./inputs/InputMessage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerMessage = styled.div`
  width: 600px;
  height: 700px;
  border: solid;
  margin: 5px;
  background-image: url("https://whatsfacil.com/blog/wp-content/uploads/2018/03/b29ddf01acd53e07e44d63efcc5c54a4-whatsapp-background-screensaver-400x667.jpg");
  overflow: auto;
`;

const StyleMessage = styled.div`
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;
  background-color: #ddf7c8;
`;
const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  const [mensagens, setMensagens] = useState([
    { usuario: "", mensagemEnviada: "" },
  ]);

  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const recebeUsuario = (event) => {
    setUser(event.target.value);
  };

  const recebeMensagem = (event) => {
    setMessage(event.target.value);
  };

  const enviaMensagem = () => {
    const novaMensagem = {
      usuario: user,
      mensagemEnviada: message,
    };

    const novasMensagens = [...mensagens, novaMensagem];
    setMensagens(novasMensagens);

    setUser("");
    setMessage("");
  };

  const listaMensagens = mensagens.map((mensagem) => {
    return (
      <div>
        <p>{mensagem.usuario}</p> <p>{mensagem.mensagemEnviada}</p>
      </div>
    );
  });

  return (
    <>
      <Container>
        <ContainerMessage>
          <StyleMessage>{listaMensagens}</StyleMessage>
        </ContainerMessage>
        <ContainerInput>
          <InputChooseUser handleInputUser={recebeUsuario} inputUser={user} />
          <InputMessage
            handleInputMessage={recebeMensagem}
            inputMessage={message}
          />
          <ButtonSend sendMessage={enviaMensagem} />
        </ContainerInput>
      </Container>
    </>
  );
}

export default App;
