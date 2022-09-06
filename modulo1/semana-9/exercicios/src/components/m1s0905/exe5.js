import { useRef } from 'react';

function Exe5(){
    const foco = useRef();
    

    return (
        <div>
            <input ref={foco}></input>
            <button onClick={() => {foco.current.focus()}}>Focar no Input</button>
        </div>
    );


}

export default Exe5;