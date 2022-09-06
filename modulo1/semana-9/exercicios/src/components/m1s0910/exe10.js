import { useState, useEffect } from 'react';

function Exe10(){
    const [textoDigita, setTextoDigita] = useState("Digite Algo.")
    const [inputValor, setInputValor] = useState('')

    const digiteAlgo = () => setTextoDigita("Digite Algo");

  

  useEffect(() => {
    setTextoDigita("O usuário está digitando...")
    const timer = setTimeout(() => {
      digiteAlgo()
    }, 500)

    return () => clearTimeout(timer)
  }, [inputValor])


    return (
        <div>
            <span>{textoDigita}</span>
            <p><input type="text" onChange={e => setInputValor(e.target.value)}></input></p>
                
            
        </div>
    );


}

export default Exe10;