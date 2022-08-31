import './desafio2.css'

function Desafio2(){
    const desafio2Array = [
        {
            "imagemdes2":"./desafio2/007.png",
            "iddes2":"007",
            "nomedes2":"Squirtle",
            "tipodes2": "Água"
         
        },
        {
            "imagemdes2":"./desafio2/025.png",
            "iddes2":"025",
            "nomedes2":"Pikachu",
            "tipodes2": "Elétrico"
         
        },
        {
            "imagemdes2":"./desafio2/036.png",
            "iddes2":"036",
            "nomedes2":"Clefable",
            "tipodes2": "Fada"
         
        },
        {
            "imagemdes2":"./desafio2/040.png",
            "iddes2":"040",
            "nomedes2":"Wigglytuff",
            "tipodes2": "Fada"
         
        },
        {
            "imagemdes2":"./desafio2/131.png",
            "iddes2":"131",
            "nomedes2":"Lapras",
            "tipodes2": "Água"
         
        },
        {
            "imagemdes2":"./desafio2/392.png",
            "iddes2":"392",
            "nomedes2":"Infernape",
            "tipodes2": "Fogo"
         
        },
        {
            "imagemdes2":"./desafio2/471.png",
            "iddes2":"471",
            "nomedes2":"Glaceon",
            "tipodes2": "Gelo"
         
        },
        {
            "imagemdes2":"./desafio2/700.png",
            "iddes2":"700",
            "nomedes2":"Sylveon",
            "tipodes2": "Fada"
         
        },
        
        
    ]


    return (
        <div className="desafio2divcont">
            {desafio2Array.map((desafio2Array) => (
                
            <div className={desafio2Array.tipodes2 === "Fada" ? 'desafio2fada' : desafio2Array.tipodes2 === "Gelo" ? 'desafio2gelo' : desafio2Array.tipodes2 === "Fogo" ? 'desafio2fogo': desafio2Array.tipodes2 === "Água" ? 'desafio2agua': desafio2Array.tipodes2 === "Elétrico" ? 'desafio2eletrico':''}>
                
                <span className="desafio2imagem">
                <img src={process.env.PUBLIC_URL + desafio2Array.imagemdes2} />
                </span>
                <span>
                    <p className="desafio2id">{desafio2Array.iddes2}</p>
                    <p className="desafio2nome">{desafio2Array.nomedes2}</p>
                    <p><span style={{fontWeight:"bold"}}>Tipo: </span>{desafio2Array.tipodes2}</p>

                </span>
            </div>
            
            ))}
        </div>
    );


}

export default Desafio2;