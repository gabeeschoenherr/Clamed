import './produto.css'

function Produto(){
    const produtos = [
        {
          "foto9":"./ms0809images/foto9-2.jpg",
          "nome9": "Mala de Nintendo Switch",
          "preco9":200.00
        },
        {
          "foto9":"./ms0809images/foto9-3.jpg",
          "nome9": "Garrafinha de Água Rosa",
          "preco9":50.00
        },
        {
          "foto9":"./ms0809images/foto9-4.jpg",
          "nome9": "Camiseta Sailor Moon",
          "preco9":30.00
        },
        {
          "foto9":"./ms0809images/foto9-5.jpg",
          "nome9": "Estojo Kirby",
          "preco9":20.00
        },
        {
          "foto9":"./ms0809images/foto9-6.jpg",
          "nome9": "Pins Sakura Card Captors",
          "preco9":30.00
        },
      ]
 


    return (
       
        (<div className="produtoscont">
            {produtos.map((produtos) => (
               
                <div className="produtoscontinterno">
                <span><img style={{width:"130px", borderRadius:"20px"}} src={process.env.PUBLIC_URL + produtos.foto9} /></span>
                <p className="produtosnome">{produtos.nome9}</p>
                <span style={{verticalAlign:"bottom", display:"flow-root"}}>
                <p className="produtospreco">R$ {produtos.preco9}</p>
                </span>
                </div>

            ))}
            </div>)
 
    );


}
        
export default Produto;