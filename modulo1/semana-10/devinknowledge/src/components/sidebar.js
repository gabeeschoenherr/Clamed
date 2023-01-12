import {useState} from 'react';
function SideBar({cardsList, setCardsList}){

    const [cards, setCards] = useState({
        titulo:'',
        skill:'',
        categoria:'',
        descricao:'',
        video:''
    }
    );

    function salvarCard(event){
       
        //Validação do título
        let tituloExiste; 
        cardsList.forEach(function (cardsList){
            if(cardsList.titulo == cards.titulo){ 
                tituloExiste = true;
            }
        });
        event.preventDefault();
        //Validação ausentes 
        if (cards.titulo.length <= 0){
            alert("Digite um título!");  
           
        }
    
        else if(cards.skill.length <= 0){
            alert("Digite uma linguagem/skill!");
        }
    
        else if(cards.categoria.length <= 0){
            alert("Selecione uma categoria!");
        }
    
        else if(cards.descricao.length <= 0){
            alert("Digite uma descrição!");
        }
    
        //Validação tamanho
        else if(cards.titulo.length < 8  || cards.titulo.length > 64){
            alert("Digite um título entre 8 e 64 caracteres!");
        }
    
        else if(cards.skill.length < 4  || cards.skill.length > 16){
            alert("Digite uma Linguagem/Skill entre 4 e 16 caracteres!");
        }
    
        else if(cards.descricao.length < 32  || cards.descricao.length > 512){
            alert("Digite uma descrição entre 32 e 512 caracteres!");
        }
        //Validação do título
        else if(tituloExiste==true){
            alert ("Esse título já existe!");
        }
    
        //A validação é um sucesso
        else{
            alert("O card foi salvo!")
            setCardsList([...cardsList, cards])
            // cardsAlt.push(cardsSalva);
            // jsonCardsJson = JSON.stringify(cardsAlt);
            // localStorage.setItem("cardsAlt", jsonCardsJson);
            // document.location.reload();
            // cardsAlt.forEach(element =>{
            //     exibirCardIndividual(element);
            // })
            // return true;
        } 
    }




    return (
        <>
 {/* Campos de captação das informações */}
 <section id="salva">
            <img src="img/logo.png"/>
            <form onsubmit="return false">
            <p>Título:</p>
            <input type="text" name="tithtml"  placeholder="Digite um título" id="tithtml" value={cards.titulo} onChange={(e)=>{setCards({...cards, titulo:e.target.value})}}/>
            <p>Linguagem/Skill:</p>
            <input type="text" name="skillhtml"  placeholder="Digite uma linguagem ou skill" id="skillhtml"  value={cards.skill} onChange={(e)=>{setCards({...cards, skill:e.target.value})}}/>
            <p>Categoria:</p>
            <select name="Categorias" id="cathtml" value={cards.categoria} onChange={(e)=>{setCards({...cards, categoria:e.target.value})}} >
                <option value=""></option>
                <option value="FrontEnd">FrontEnd</option>
                <option value="BackEnd">BackEnd</option>
                <option value="FullStack">FullStack</option>
                <option value="SoftSkill"> SoftSkill</option>
            </select>
            <p>Descrição:</p>
            <textarea type="text" name="deshtml" placeholder="Escreva aqui o detalhamento da sua dica" id="deshtml" value={cards.descricao} onChange={(e)=>{setCards({...cards, descricao:e.target.value})}} ></textarea>
            <p>Vídeo do Youtube:</p>
            <input type="text" name="vidhtml"  placeholder="https://www.youtube.com/embed/SEU_LINK" id="vidhtml" value={cards.video} onChange={(e)=>{setCards({...cards, video:e.target.value})}}/>
            <div id="limpasalvabt">
                <button id="limpbt" onClick="">Limpar</button>
                <button id="salvbt" onClick={salvarCard}>Salvar</button>
                </div>
            </form>
            
    </section>
        </>
    );
}

export default SideBar;