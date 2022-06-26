import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputNamePlaylist, setInputNamePlaylist] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [deletePlaylist, setDeletePlaylist] = useState("");

  const handlePlaylist = (event) => {
    setInputNamePlaylist(event.target.value);
  };

  const handleDeletePlaylist = (event) => {
    setDeletePlaylist(event.target.value);
  };

  const createPlaylist = () => {
    const body = {
      name: inputNamePlaylist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "gabriella-lemos-franklin",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setInputNamePlaylist("");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const geraPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "gabriella-lemos-franklin",
          },
        }
      )
      .then((response) => {
        setPlaylists(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const delPlaylist = (id) => {
    const select = playlists.filter((list) => deletePlaylist === list.name);
    console.log(select[0].id);
    id = select[0].id;

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "gabriella-lemos-franklin",
          },
        }
      )
      .then((response) => {
        setDeletePlaylist("");
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const novaPlaylist = playlists.map((lista) => {
    return <p key={lista.id}>{lista.name} </p>;
  });

  useEffect(geraPlaylist, [playlists]);
  return (
    <div className="App">
      <h4>Digite o nome da playlist:</h4>
      <input onChange={handlePlaylist} value={inputNamePlaylist}></input>
      <button onClick={createPlaylist}>criar playlist</button>
      {novaPlaylist}
      <h3> Deletar playlist</h3>
      <input
        onChange={handleDeletePlaylist}
        value={deletePlaylist}
        placeholder="Digite o nome da playlist"
      ></input>
      <button onClick={() => delPlaylist(novaPlaylist.id)}>Deletar</button>
    </div>
  );
}

export default App;
