import './exe10.css'
import Cora10 from './cora10';
import Corades10 from './corades10';

function Exe10(){
    const exe10Array = [
        {
          "foto10":"./m1s0810images/foto10-1.jpg",
          "nome10": "Lalafell no alface",
          "likes":0
        },
        {
            "foto10":"./m1s0810images/foto10-2.jpg",
            "nome10": "Menina esquilo",
            "likes":10
        },
        {
            "foto10":"./m1s0810images/foto10-3.jpg",
            "nome10": "Casal e Corgi",
            "likes":200
        },
        {
            "foto10":"./m1s0810images/foto10-4.jpg",
            "nome10": "Menina sereia",
            "likes":10
        },
      ]
 


    return (
       
        (<div className="exe10cont" >
            {exe10Array.map((exe10Array) => (
               
                <div className="exe10continterno" >
                    <span><img style={{width:"130px", borderRadius:"20px"}} src={process.env.PUBLIC_URL + exe10Array.foto10} /></span>
                    <p>{exe10Array.nome10}</p>
                    <span style={{verticalAlign:"middle", display:"inline-flex"}}>
                        {exe10Array.likes == 0 ? (
                        <Corades10 />
                        ) : (
                        <Cora10 />
                        )}
                        <span style={{marginLeft:"8px"}}> {exe10Array.likes}</span>
                    </span>
                </div>

            ))}
            </div>)
 
    );


}
        
export default Exe10;