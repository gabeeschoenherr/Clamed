import { useState, useEffect } from 'react';

function Exe4(){
    const [botao, setBotao] = useState('Nenhum')
    useEffect(()=>{
        document.title = botao;

    }, [botao])
    

    return (
        <div>
            <span>O valor do botão é: {botao}</span>
            <p>
                <button onClick={() => {setBotao(botaoAntes => botaoAntes = "Titulo 1")}}>Titulo 1</button>
                <button onClick={() => {setBotao(botaoAntes => botaoAntes = "Titulo 2")}}>Titulo 2</button>
            </p>
        </div>
    );


}

export default Exe4;