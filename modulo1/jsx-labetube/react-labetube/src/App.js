import logo from './logo.svg';
import imagem01 from './imagem01.jpg'
import imagem02 from './imagem02.jpg'
import imagem03 from './imagem03.jpg'
import imagem04 from './imagem04.jpg'
import imagem05 from './imagem05.jpg'
import imagem06 from './imagem06.jpg'
import imagem07 from './imagem07.jpg'
import imagem08 from './imagem08.jpg'
import './App.css';

function App() {
  const onClickImagem = () => {
    alert('O vídeo está sendo reproduzido!')
  } 
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lab Tube
        </h1>
        <input type="text" name="name" placeholder="busca"/>

      </header>
      <section className="App-section">
        <aside>
        <ul>
            <li class="botoes-meunu-vertical">Início</li>
            <li class="botoes-meunu-vertical">Em alta</li>
            <li class="botoes-meunu-vertical">Inscrições</li>
            <hr>
            </hr>
            <li class="botoes-meunu-vertical">Originais</li>
            <li class="botoes-meunu-vertical">Histórico</li>
        </ul>
        </aside>
        <article className="App-galeria">
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem01" src={imagem01} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem02" src={imagem02} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem03" src={imagem03} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem04" src={imagem04} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem05" src={imagem04} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem06" src={imagem05} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem07" src={imagem06} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
          <figure onClick={onClickImagem}>
           <img className="box-galeria imagem08" src={imagem07} alt=""/>
           <figcaption><h4>Título do vídeo</h4></figcaption>
          </figure>
        </article>
      </section>
      <footer className="App-footer">
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;
