import { useState, useEffect } from 'react';

function Exe2(){
    const [texto, setTexto] = useState('França')
    useEffect(()=>{
        console.log(texto);

    }, [texto])

    return (
        <div>
            <p>Texto: {texto}</p>
            <input value={texto} onChange={(e) => setTexto(e.target.value)}></input>
                
            
        </div>
    );


}

export default Exe2;