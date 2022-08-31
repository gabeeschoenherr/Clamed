

var produto;
var quantProduto;
var quantProdutoMaior = 0;
var i=0;
var produtoMaior;


while (i!=6){
var num = Number( prompt("Escolha sua opção: (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido"));

switch (num) {
  case 1:
    produto = "Hortifruti";
    quant(quantProduto);
    break;
  case 2:
    produto = "Laticínios";
    quant(quantProduto);
    break;
  case 3:
    produto = "Carnes";
    quant(quantProduto);
    break;
  case 4:
    produto = "Peixes";
    quant(quantProduto);
    break;
  case 5:
    produto = "Aves";
    quant(quantProduto);
    break;
  case 6:
    i=6;
    document.write(produtoMaior," ", quantProdutoMaior); 
    break;   
 }
 
 }

 function quant(quantProduto) {
  quantProduto = Number( prompt("Escolha a quantidade de itens:"));
  if(quantProdutoMaior<quantProduto){
    quantProdutoMaior = quantProduto;
    produtoMaior = produto;
  }
}
  

