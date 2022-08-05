class serie {

    constructor(nome, anoLancamento, qttTemporada){
        this.nome;
        this.anoLancamento;
        this.qttTemporada;
    }

};
let serie1=[];
let anoLancMaior = 0;
let serieNomeMaior;


function instanciar(){
    for (var i = 0; i < 4; i++) {
        serie1 [i]= new serie();
        serie1[i].nome = prompt("Digite o nome da série:");
        serie1[i].anoLancamento = prompt("Digite o ano de lançamento:");
        serie1[i].qttTemporada = prompt("Digite a quantidade de temporadas");
        

    }
}
function maisAntiga(){
    
serie1.forEach(maisAntigaCalculo);

function maisAntigaCalculo(item){

if (anoLancMaior == 0){
    anoLancMaior = item.anoLancamento;
    serieNomeMaior = item.nome;

}
else if(item.anoLancamento < anoLancMaior){
    anoLancMaior = item.anoLancamento;
    serieNomeMaior = item.nome;


}
}
}
instanciar();
maisAntiga();
console.log(serie1);
console.log(serieNomeMaior);
console.log(anoLancMaior);

let texto = document.getElementById("h1");

texto.innerHTML = `O seriado mais antigo é ${serieNomeMaior}, lançado no ano de ${anoLancMaior}.`;