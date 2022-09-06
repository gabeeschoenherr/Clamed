import { useState, useMemo, useCallback } from "react";
import "./exe8.css";

function Exe8({valorPrevioSoma, nomeJogo}) {
  const [tempo, setTempo] = useState(0);

  const teste = useMemo(() => {
    return {
      opacity: 1,
      width: `${tempo}%`,
    };
  }, [tempo]);

  

  const exe7Call = useCallback((valorPrevio = 0) => {
    if (valorPrevio < 100) {
      setTimeout(() => {
        setTempo(valorPrevio + valorPrevioSoma);
        exe7Call(valorPrevio + valorPrevioSoma);
      }
	  , 200);
    }
	else if(valorPrevio == 100){
		setTempo(valorPrevio=0)

	}
  }, []);
  



  return (
    <div>
      <span style={{ fontWeight: "bold" }}>Dragon Age {nomeJogo}</span>
      <p>8 GB</p>
      <div className="progress">
        <div className="progress-done" style={teste}>
          {tempo}%
        </div>
      </div>

      <button onClick={() => exe7Call()}>Download</button>
    
   </div>
  );
}

export default Exe8;
