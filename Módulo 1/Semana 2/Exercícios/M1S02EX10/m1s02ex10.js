
let i = 1;
let nome = prompt("Digite o seu nome:");
let array = [];
let soma = 0;

while (i!=5){
    let num = Number( prompt(`Digite a nota ${i}`));
    array.push(num);

i++;
}

for (let a = 0; a < array.length; a++) {
    soma += array[a];
}

let somaTotal = soma / 4;

if (somaTotal > 7){
    alert(`O aluno ${nome} tirou a média ${somaTotal} e foi aprovado.`);
}
else{
    alert(`O aluno ${nome} tirou a média ${somaTotal} e foi reprovado.`);

}