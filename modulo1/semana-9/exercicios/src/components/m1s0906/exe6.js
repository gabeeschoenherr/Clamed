import { useState, useRef } from "react";
import './exe6.css'

export default function Exe6() {
    const inputRefNome = useRef();
    const inputRefTexto = useRef();
  const [mensagem, setMensagem] = useState([
    {
      nomeMensagem: "Lila Salti",
      mensagemTexto: "But blessed with beauty and rage",
    },
    {
      nomeMensagem: "Lana Daydream",
      mensagemTexto: "I can hear sirens, sirens",
    },
  ]);

  function adiciona(props) {
    console.log("nome, texto");
    setMensagem([
      ...mensagem,
      { nomeMensagem: props.nome, mensagemTexto: props.texto },
    ]);
  }
  return (
    <div>
    <div className="exe6form">
      <form>
        <span>Escreva um nome:</span>
        <p>
          <input name="nomeMensagem" ref={inputRefNome}/>
        </p>
        <span>Escreva uma mensagem:</span>
        <p>
          <input name="mensagemTexto" ref={inputRefTexto} />
        </p>
      </form>
      <button
        onClick={() => {
          adiciona({
            nome: inputRefNome.current.value,
            texto: inputRefTexto.current.value
          });
        }}
      >
        Enviar
      </button>
      </div>
        
      {mensagem.map((mensagem) => (
        <div className="exe6divcontinterno">
            <div className="exe6primeiralinha">
            <img src={process.env.PUBLIC_URL + "./m1s0906imagem/usu.png"}/>
            <span className="exe6nomemensagem">{mensagem.nomeMensagem}</span>
            </div>
          <p>{mensagem.mensagemTexto}</p>
          
        </div>
      ))}
    </div>
  );
}