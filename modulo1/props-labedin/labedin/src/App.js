import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHSfNplXcjGUw/profile-displayphoto-shrink_800_800/0/1647790395634?e=1658966400&v=beta&t=EhqIujjBl6fJjhvqnP59uJYoxr_Mto15PE1m0QiJlgc" 
          alt="teste"
          nome="Gabriella" 
          descricao="Oi, eu sou a Gabi! Atualmente sou desenvolvedora frontend no Grupo Boticário e participante do programa Desenvolve que em parceria com a Labenu nos permite desenvolver soft e hard skills na área de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://as2.ftcdn.net/v2/jpg/04/88/71/87/1000_F_488718777_8IpvSL1sFcmzXgMPRYxOyZ68fy6rus0Y.jpg" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-conteiner">
          <CardPequeno 
            imagem="https://cdn-icons-png.flaticon.com/512/331/331389.png"
            alt={`imagem-email`}
            titulo={`Email: `}
            texto={`gabriella.vaz@gmail.com`}/>
      
          <CardPequeno 
            imagem="https://as2.ftcdn.net/v2/jpg/02/72/89/67/1000_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg"
            alt={`imagem-endereco`}
            titulo={`Endereço: `}
            texto={`Rua Evaristo da Veiga`}/>
      </div>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://miro.medium.com/max/1400/1*M8BwbciJvHFS2LL-RJ-yIg.png" 
          alt="alt"
          nome="Grupo Boticário" 
          descricao="Programa DESENVOLVE e Desenvoldora Frontend" 
        />
        
        <CardGrande 
          imagem="data:image/jpeg;base64,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" 
          nome="EMGEPRON" 
          descricao="Analista de Projetos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
