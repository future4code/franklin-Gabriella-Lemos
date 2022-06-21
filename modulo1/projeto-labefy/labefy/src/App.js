import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputNamePlaylist, setInputNamePlaylist] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const handlePlaylist = (event) => {
    setInputNamePlaylist(event.target.value);
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
      .then((respponse) => {
        setPlaylists(respponse.data.result.list);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deletaplaylist = () => {
    axios.delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId",
      {
        headers: {
          Authorization: "gabriella-lemos-franklin",
        },
      },
      {
        params: {
          playlistId: playlists.id,
        },
      }
    );
  };
  const novaPlaylist = playlists.map((lista) => {
    return (
      <p key={lista.id}>
        {lista.name} <button onClick={deletaplaylist}>Delete playlist</button>
      </p>
    );
  });

  useEffect(geraPlaylist, [playlists]);
  return (
    <div className="App">
      <h4>Digite o nome da playlist:</h4>
      <input onChange={handlePlaylist} value={inputNamePlaylist}></input>
      <button onClick={createPlaylist}>criar playlist</button>
      {novaPlaylist}
      <button>Deletar playlist</button>
    </div>
  );
}

export default App;
