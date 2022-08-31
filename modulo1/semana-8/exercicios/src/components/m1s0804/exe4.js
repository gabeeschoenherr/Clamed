function Exe4(props){
    const frase = props.fraseEnviada;


    return (
        <div>
            <p style={{fontWeight: "bold"}}>O que são props de um componente no React?</p>
            <p style={{fontStyle: "italic"}}>Prop é a abreviação de property. São propriedades de um objeto.</p>
            <p style={{color:"pink", fontWeight:"bold"}}>{frase}</p>

        </div>
    );


}

export default Exe4;