import { useState, useEffect } from 'react';
import MainContent from '../components/maincontent';
import SideBar from '../components/sidebar';

function Home(){
    

    const [cardsList, setCardsList] = useState([
        {
          
            titulo: 'O que é o Scrum?',
            skill: 'Trabalho',
            categoria:'SoftSkill',
            descricao: 'O Scrum é uma estrutura que ajuda as equipes a trabalharem juntas. Semelhante a uma equipe de rugby (de onde vem o nome) treinando para o grande jogo, o Scrum estimula as equipes a aprenderem com as experiências, a se organizarem enquanto resolvem um problema e a refletirem sobre os êxitos e fracassos para melhorarem sempre.',
            video: 'https://www.youtube.com/embed/XfvQWnRgxG0'
        },
        {
         
            titulo: 'A TAG div do HTML5',
            skill: 'HTML5',
            categoria:'FrontEnd',
            descricao: 'O elemento de divisão HTML <div> é um container genérico para conteúdo de fluxo, que de certa forma não representa nada.',
            video: 'https://www.youtube.com/embed/FyOsoRALEG0'
        },
        {
          
            titulo: 'O método forEach()',
            skill: 'JavaScript',
            categoria:'FullStack',
            descricao: 'O método forEach() executa uma dada função em cada elemento de um array.',
            video: ''
        },
        {
          
            titulo: 'As Funções',
            skill: 'JavaScript',
            categoria:'FullStack',
            descricao: 'Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.',
            video: ''
        },   
    ])


    return (
        <div>
        <div id="main"> </div>
            <main>
           <SideBar cardsList={cardsList} setCardsList={setCardsList}/>
           <MainContent cardsList={cardsList}/>
            </main>
            </div>
        
    );


}

export default Home;