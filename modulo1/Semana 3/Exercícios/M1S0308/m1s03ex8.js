
var item1;

function adicionar(){
    item1 = window.document.getElementById('item');
    res.innerHTML += `<p> ${item1.value} </p>`;
}

function salvar(){
    item1 = window.document.getElementById('item');
    if(document.getElementById("item").value == ""){
        alert ("Insira algum texto!");

    }
    else{
    localStorage.info = document.getElementById("item").value;}
    
}

function mostrar(){
   item1 = localStorage.info;
   if(item1 == ""){
    res.innerHTML = `<p>Não há itens salvos.</p>`;
    
}
else{
    res.innerHTML = `<p> ${item1} </p>`;
}
console.log(item1);
}
