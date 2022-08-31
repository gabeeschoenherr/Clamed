import './desafio1.css'
function Desafio1({desafio1ArrayNomeCol}){
    const desafio1Array = [
        {
          "nomeDes1":"Laura Flower",
          "idadeDes1": 10,
          "profDes1": "Estudante"
        },
        {
            "nomeDes1":"Louise Blancheur",
            "idadeDes1": 23,
            "profDes1": "Professora"
          },
          {
            "nomeDes1":"Arthur Smoke",
            "idadeDes1": 34,
            "profDes1": "Engenheiro"
          },
          {
            "nomeDes1":"Felipe Gardenia",
            "idadeDes1": 44,
            "profDes1": "Médico"
          },
          {
            "nomeDes1":"Chantel Love",
            "idadeDes1": 35,
            "profDes1": "Manicure"
          },
    ]

    return (
        <table>
            <tr className="titulodes1">
            {desafio1ArrayNomeCol.map((desafio1ArrayNomeCol) => (  
                <td style={{fontWeight:"bold"}}>{desafio1ArrayNomeCol}</td>
                ))}
            </tr>
        {desafio1Array.map((desafio1Array) => (      
            <tr>
                <td>{desafio1Array.nomeDes1}</td>
                <td>{desafio1Array.idadeDes1}</td>
                <td>{desafio1Array.profDes1}</td>
            </tr>
        ))}
        </table>
    );


}

export default Desafio1;