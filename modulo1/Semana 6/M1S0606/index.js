var pokemon ;


function pokeBuscar(){
    //limpa código
    pokemontype.innerHTML = "";
    ability.innerHTML ="";


    //
  var poke = new XMLHttpRequest();
  var linkPoke = 'https://pokeapi.co/api/v2/pokemon/';
  var linkPoke2 = document.getElementById("pokeNome").value;
  linkPoke += linkPoke2;
  console.log(linkPoke2);
  console.log(linkPoke);


poke.onload = (pokemon) =>{
pokemon = JSON.parse(poke.response);


document.getElementById("imagem").src = pokemon.sprites.front_default;
pokemonname.innerHTML = pokemon.name;
pokemonnumber.innerHTML = pokemon.id;

for(a=0;a<pokemon.types.length; a++){
    pokemontype.innerHTML += `<p> ${pokemon.types[a].type.name} </p>`
    
    }

for(i=0;i<pokemon.abilities.length; i++){
ability.innerHTML += `<li> ${pokemon.abilities[i].ability.name} </li>`

}

weight.innerHTML = pokemon.weight;
 
}

poke.onerror = (err) => console.log(err);

poke.open('GET', linkPoke);


poke.send();
 
}





