import { useState } from 'react';

function Exe3(){
    const [contagem, setContagem] = useState(0)

    return (
        <div>
            <p>Contagem: {contagem}</p>
            <button onClick={() => {setContagem(contAntes => contAntes + 1)}}>Contagem</button>
                
            
        </div>
    );


}

export default Exe3;