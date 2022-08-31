
function cepBuscar(){
let cepnum = document.getElementById("cep").value;


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



}



