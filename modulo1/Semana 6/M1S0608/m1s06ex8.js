
function cepBuscar(){
let cepnum = document.getElementById("cep").value;


const cepPro = new Promise((resolve, reject) => {
 
  if (cepnum.length == 8) {
     
          resolve();
  } else if(cepnum == ""){
    reject ("O campo está vazio, digite um CEP válido.");
    alert("O campo está vazio, digite um CEP válido.");
  }
  else if (cepnum.length>8 || cepnum.length<8){
    reject ("CEP inválido.");
    alert("CEP inválido.");

  }
})

//Resolve
cepPro.then((resolve)=>{

  let cepB = fetch("https://viacep.com.br/ws/"+cepnum+"/json/")
.then(response => {
  return response.json();
})
.then(cep => {
  console.log(cep);
  cepinfo.innerHTML = `<p>CEP: ${cep.cep}</p> <p>Logradouro: ${cep.logradouro}</p>
  <p>Complemento: ${cep.complemento}</p> <p>Bairro: ${cep.bairro}</p> <p>Localidade: ${cep.localidade}</p>
  <p>UF: ${cep.uf}</p>`;
});

//Reject
}).catch(
(err)=>{console.error(err)}
);
};





