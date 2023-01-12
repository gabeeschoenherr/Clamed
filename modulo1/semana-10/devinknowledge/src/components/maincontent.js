import { useState } from 'react';
import Summary from "./summary";
import Filter from "./filter";
import TipCard from "./tipcard";



function MainContent({cardsList}){
    


    return (
        <>
    {/* Quantidade de cards */}
    <section id="exibi">
        <Summary/>

        {/* Botões de buscar e limpar  */}
        <Filter/>


        {/* Cards dentro de um iframe        */}
        <div id="cards">
        {cardsList.map(cardsList =>(
            <TipCard cardsList={cardsList}/>
        ))}
        </div>
    </section>
    </>
    )
}

export default MainContent;

