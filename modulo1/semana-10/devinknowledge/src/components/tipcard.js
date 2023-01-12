function TipCard({cardsList}){

    return(
        <div className="card">
            <h1>{cardsList.titulo}</h1>
            <p>Linguagem/ Skill: {cardsList.skill}</p>
            <p>Categoria: {cardsList.categoria}</p>
            <div>{cardsList.descricao}</div>
            <div className="cardbuttondiv">
                <button className="carddel"></button>
                <button className="cardedita"></button>
                <button className="cardvideo"></button>
            </div>
            
        </div>
        )

}
export default TipCard;


    