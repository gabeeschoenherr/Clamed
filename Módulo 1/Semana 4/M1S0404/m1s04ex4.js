const frutas = ['Morango','Maçã','Tomate','Abacaxi','Kiwi','Uva'];
var frutaExcluida;
var frutaExcluidaArray;
const bt = document.getElementById('bt');

bt.addEventListener("click", function() {
   frutaExcluida = document.getElementById("item").value;
   console.log (frutaExcluida);
   frutas.splice(frutas.indexOf(frutaExcluida),1);
   frutaExcluida="";

    
    console.log(frutas);
   });
   
   

  
   

