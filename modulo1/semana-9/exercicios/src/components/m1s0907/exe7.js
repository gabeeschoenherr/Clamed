import { useState, useMemo, useCallback } from "react";
import "./exe7.css";

function Exe7() {
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
        setTempo(valorPrevio + 1);
        exe7Call(valorPrevio + 1);
      }
	  , 200);
    }
	else if(valorPrevio == 100){
		setTempo(valorPrevio=0)

	}
  }, []);

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>The Sims 4 MODs</span>
      <p>40 MB</p>
      <div className="progress">
        <div className="progress-done" style={teste}>
          {tempo}%
        </div>
      </div>

      <button onClick={() => exe7Call()}>Download</button>
    </div>
  );
}

export default Exe7;
