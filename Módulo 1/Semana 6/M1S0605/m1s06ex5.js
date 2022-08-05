var pokemon ;


function pokeBuscar(){
  var poke = new XMLHttpRequest();
  var linkPoke = 'https://pokeapi.co/api/v2/pokemon/';
  var linkPoke2 = document.getElementById("pokeNome").value;
  linkPoke += linkPoke2;
  console.log(linkPoke2);
  console.log(linkPoke);


poke.onload = (pokemon) =>{
pokemon = JSON.parse(poke.response);

console.log("Nome: ",pokemon.name);
console.log("Altura: ",pokemon.height);
console.log("Peso: ",pokemon.weight);
console.log(pokemon.abilities[0].ability.name);
document.getElementById("imagem").src = pokemon.sprites.front_default;

for(i=0;i<pokemon.abilities.length; i++){
listahab.innerHTML += `<li> ${pokemon.abilities[i].ability.name} </li>`

}
 
}

poke.onerror = (err) => console.log(err);

poke.open('GET', linkPoke);


poke.send();
 
}






