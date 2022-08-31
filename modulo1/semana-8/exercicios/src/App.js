import './App.css';
import Texto from './components/m1s0803/texto'
import Titulo from './components/m1s0803/titulo';
import Exe1 from './components/m1s0801/exe1';
import Exe2 from './components/m1s0802/exe2';
import Exe4 from './components/m1s0804/exe4';
import Exe4props from './components/m1s0804/exe4props';
import Exe5 from './components/m1s0805/exe5';
import Exe6 from './components/m1s0806/exe6';
import Post from './components/m1s0807/post';
import Exe8 from './components/m1s0808/exe8';
import Produto from './components/m1s0809/produto';
import Exe10 from './components/m1s0810/exe10';
import Desafio1 from './components/desafio1/desafio1';
import Desafio2 from './components/desafio2/desafio2';

function App() {
  
  const desafio1ArrayNomeCol = ["Nome","Idade","Profissão"];

  return (
    <div>
      <div className="card">
        <p>🌸 Exercício 01:</p>
        <Exe1 />
      
      </div>
      <div className="card">
        <p>🌸 Exercício 02:</p>
        <Exe2 />
      
      </div>
      <div className="card">
        <p>🌸 Exercício 03:</p>
        <Titulo />
        <Texto />
      </div>
      <div className="card">
        <p>🌸 Exercício 04:</p>
        <Exe4 />
        <Exe4props fraseEnviada="Eu sou um texto rosa de props" />
        <Exe4props fraseEnviada="Eu sou outro texto rosa de props" />
      </div>
      <div className="card">
        <p>🌸 Exercício 05:</p>
        <Exe5 num1={5} num2={6} />
      </div>
      <div className="card">
        <p>🌸 Exercício 06:</p>
        <Exe6 corDeFundo={"pink"} textoDoBotao={"Botão de Fada"} />
        <Exe6 corDeFundo={"rgb(211, 77, 99)"} textoDoBotao={"Botão de Unicórnio"} />
      </div>
      <div className="card">
        <p>🌸 Exercício 07:</p>
        <p>Props do post: foto do usuário, nome do usuário, tempo do post, menu, descrição, imagem do post, icon de coração, comentários, compartilhar e likes</p>
        <Post 
          fotoDoUsu={require("./components/m1s0807/fotoDoUsu.png")} 
          nomeDoUsu={"Gabee Schoenherr"}
          tempoPost={"5m"}
          menu={require("./components/m1s0807/menu.png")}
          descri={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}
          imagemDoPost={require("./components/m1s0807/imagemPost.jpg")}
          iconCora={require("./components/m1s0807/cora.png")}
          coment={"Comentários"}
          comp={"Compartilhar"}
          likes={"Curtido por Bibs e mais 30 pessoas"}
        />

        <Post 
          fotoDoUsu={require("./components/m1s0807/fotoDoUsu2.png")} 
          nomeDoUsu={"Vivi"}
          tempoPost={"7m"}
          menu={require("./components/m1s0807/menu.png")}
          descri={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}
          imagemDoPost={require("./components/m1s0807/imagemPost2.jpg")}
          iconCora={require("./components/m1s0807/cora.png")}
          coment={"Comentários"}
          comp={"Compartilhar"}
          likes={"Curtido por Bibs e mais 80 pessoas"}
        />
      </div>
      <div className="card">
        <p>🌸 Exercício 08:</p>
        <div className="exe8lista">
          <Exe8/>
          <Exe8  
            foto8={require("./components/m1s0808/foto8-2.png")}
            nome8={"Ana Blancheur"}
            descri8={"Dancin' in the dark, in the pale moonlight."}
          />
          <Exe8  
            foto8={require("./components/m1s0808/foto8-3.png")}
            nome8={"Céline Voar"}
            descri8={"And you say: Get over here and play a video game."}
          />
          <Exe8  
            foto8={require("./components/m1s0808/foto8-4.png")}
            nome8={"Lila Ametista"}
            descri8={"Heaven is a place on Earth with you."}
          />
          <Exe8  
            foto8={require("./components/m1s0808/foto8-5.png")}
            nome8={"Amélia Delacour"}
            descri8={"Only worth living if somebody is loving you."}
          />

        </div>
      </div>
      <div className="card">
        <p>🌸 Exercício 09:</p>
        <Produto />
     
        
      </div>
      <div className="card">
        <p>🌸 Exercício 10:</p>
        <Exe10 />
     
        
      </div>
      <div className="card">
        <p>🌸 Desafio 1:</p>
        <Desafio1 desafio1ArrayNomeCol = {desafio1ArrayNomeCol} />
     
        
      </div>
      <div className="card">
        <p>🌸 Desafio 2:</p>
        <Desafio2 />
     
        
      </div>
    </div>
  );
}

export default App;
