import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [state, setState] = useState({
    pessoas: [(nome: "robertinha")],
  });

  return (
    <MainContainer>
      <Post
        nomeUsuario={"robertinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/151"}
      />
      <Post
        nomeUsuario={"renatinha"}
        fotoUsuario={"https://picsum.photos/50/51"}
        fotoPost={"https://picsum.photos/200/152"}
      />
      <Post
        nomeUsuario={"gustavo"}
        fotoUsuario={"https://picsum.photos/50/52"}
        fotoPost={"https://picsum.photos/200/153"}
      />
    </MainContainer>
  );
}

export default App;
