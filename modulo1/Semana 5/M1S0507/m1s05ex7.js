import criarTab from "./js/m1s05ex72.js";
let nome;
let imagem ;
let descri;
bt.addEventListener("click", criarUsu);
function criarUsu(){
nome = document.getElementById("nome").value;
imagem = document.getElementById("imagem").value;
descri = document.getElementById("descri").value;

document.getElementById("nome").value = "";
document.getElementById("imagem").value = "";
document.getElementById("descri").value = "";

criarTab(nome, imagem, descri);}


