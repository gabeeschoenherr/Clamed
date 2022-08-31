
let num = 0;
let tabu;
let tabuToda= [];
let tabuada = (item) => {
for(let i=0;i<=10;i++){
  tabu=item*i;
  console.log(tabu);
  document.write("<p>",item," x ",i," = ",tabu,"</p>");
}
  };
  
let tabuadaRep = (item, callback) => {
for(let a=0;a<=10;a++){
  document.write("<p> Tabuada do ",item,":</p>")
  tabuToda[a] = tabuada(item);
  item++;

  
}

  };


tabuadaRep(num, tabuada);


