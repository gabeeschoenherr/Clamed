var nome; 
var altura;
var peso;
var imagem ;
var clefable ;

var poke = new XMLHttpRequest();

//poke.onload = ({ target }) => console.log(target.response);
poke.onload = (clefable) =>{
  clefable = JSON.parse(poke.response);
   //console.log(clefable);
console.log("Nome: ",clefable.name);
console.log("Altura: ",clefable.height);
console.log("Peso: ",clefable.weight);
document.getElementById("imagem").src = clefable.sprites.front_default;
   
   
}

poke.onerror = (err) => console.log(err);

poke.open('GET', 'https://pokeapi.co/api/v2/pokemon/clefable');


poke.send();



