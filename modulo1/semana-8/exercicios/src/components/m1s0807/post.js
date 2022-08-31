//Props do post: foto do usuário, nome do usuário, tempo do post, menu, descrição, imagem do post, icon de coração, comentários, compartilhar e likes
import './post.css'
import PropTypes from 'prop-types';
function Post({fotoDoUsu, nomeDoUsu, tempoPost, menu, descri, imagemDoPost, iconCora, coment, comp, likes}){
 


    return (
        <div>
            <div className="cont">
                <header>
                    <img style={{width: "50px"}} src={fotoDoUsu} />
                    <span style={{verticalAlign:"top", marginLeft:"10px",display:"inline-block"}}>{nomeDoUsu}
                        <p style={{marginTop:"0px", fontSize:"12px", fontStyle: "italic"}}>
                            {tempoPost}
                        </p>
                    </span>
        
                    <span style={{float:"right"}}><img style={{width:"30px"}} src={menu}/></span>
                </header>
                <div>
                    <span style={{marginTop:"20px",marginBottom:"20px", display:"block"}}>{descri}</span>
                    <span style={{textAlign:"center", display:"block"}}><img style={{width:"550px", borderRadius:"20px"}} src={imagemDoPost}/></span>
                </div>
                <div style={{marginTop:"10px"}}>
                    <span style={{verticalAlign: "-webkit-baseline-middle"}}><img style={{width:"20px"}} src={iconCora}/></span>
                    <span style={{verticalAlign:"middle", marginLeft:"10px"}}>{coment}</span>
                    <span style={{float:"right"}}>{comp}</span>
                    <span><p style={{marginTop:"0px", fontWeight:"bold"}}>{likes}</p></span>
                </div>
            </div>
       </div>
    );
}

Post.propTypes = {
    fotoDoUsu: PropTypes.string,
    nomeDoUsu: PropTypes.string,
    tempoPost: PropTypes.string,
    menu: PropTypes.string,
    descri: PropTypes.string,
    imagemDoPost: PropTypes.string,
    iconCora: PropTypes.string,
    coment: PropTypes.string,
    comp: PropTypes.string,
    likes: PropTypes.string
}



export default Post;