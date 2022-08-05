var num = prompt("Digite um número para saber se é par ou impar:");

let parImpar = function (num){
var resto = num%2;
if(resto==0) {
    document.write("<h3>O número ", num, " é par</h3>");
}
else{
    document.write("<h3>O número ", num, " é impar</h3>");
}
}

parImpar(num);