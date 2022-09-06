import { useState } from 'react';
import './App.css';
import Exe1 from './components/m1s0901/exe1';
import Exe2 from './components/m1s0902/exe2';
import Exe3 from './components/m1s0903/exe3';
import Exe4 from './components/m1s0904/exe4';
import Exe5 from './components/m1s0905/exe5';
import Exe6 from './components/m1s0906/exe6';
import Exe7 from './components/m1s0907/exe7';
import Exe8 from './components/m1s0908/exe8';
import Exe9 from './components/m1s0909/exe9';
import Exe10 from './components/m1s0910/exe10';

function App() {
 

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
        <Exe3 />
      </div>
      <div className="card">
        <p>🌸 Exercício 04:</p>
        <Exe4 />
      </div>
      <div className="card">
        <p>🌸 Exercício 05:</p>
        <Exe5 />
      </div>
      <div className="card">
        <p>🌸 Exercício 06:</p>
        <Exe6 />
      </div>
      <div className="card">
        <p>🌸 Exercício 07:</p>
        <Exe7 />
      </div>
      <div className="card">
        <p>🌸 Exercício 08:</p>
        <Exe8 valorPrevioSoma={4} nomeJogo={"Origins"} />
        <Exe8 valorPrevioSoma={1} nomeJogo={"Inquisition"} />
      </div>
      <div className="card">
        <p>🌸 Exercício 09:</p>
        <Exe9/>
       
      </div>
      <div className="card">
        <p>🌸 Exercício 10:</p>
        <Exe10/>
       
      </div>
    </div>
  );
}

export default App;
