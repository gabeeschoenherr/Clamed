function Exe8({foto8, nome8, descri8}){
 


    return (
        <div style={{marginTop:"15px"}}>
            <span><img style={{width:"40px"}} src={foto8}/></span>
            <span style={{verticalAlign:"top",color:"antiquewhite", fontWeight:"bold", marginLeft:"10px", display:"inline-block"}}>{nome8}
                <p style={{color:"antiquewhite", fontWeight:"normal", marginTop:"0px", fontSize:"12px"}}>{descri8}</p>
            </span>
            
        </div>
    );


}

Exe8.defaultProps = {
    foto8: require("./foto8-1.png"),
    nome8: "Anônimo",
    descri8: "Lorem ipsum dolor sit amet." 
}

export default Exe8;