import { useState } from 'react';
import './exe1.css'
function Exe1(){
    const [fruta, setFruta] = useState([
        {frutaimg:"./m1s0901imagem/1.jpg",frutanome:"Morango"},
        {frutaimg:"./m1s0901imagem/2.jpg",frutanome:"Melancia"},
        {frutaimg:"./m1s0901imagem/3.jpg",frutanome:"Uva"},
        {frutaimg:"./m1s0901imagem/4.jpg",frutanome:"Kiwi"},
        {frutaimg:"./m1s0901imagem/5.jpg",frutanome:"Cereja"},
    ])

    return (
        <div className='exe1cont'>
            {fruta.map(fruta =>(
                <div className='exe1continterno'>
                    <img src={process.env.PUBLIC_URL + fruta.frutaimg}/>
                    <span>
                        <p>{fruta.frutanome}</p>
                    </span>
                </div>
            ))}
            
        </div>
    );


}

export default Exe1;