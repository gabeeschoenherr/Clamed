let arrayAlunos = [
   {
       nome: "Carlos",
       media: 10
   },
   {
       nome: "Julia",
       media: 8
   },
   {
       nome: "Rayane",
       media: 6
   },
   {
       nome: "Arthur",
       media: 5
   }
]
let alunosRec = [];
let alunosPass = [];

function media (item){
if (item.media < 7){
alunosRec.push(item);
document.write("<p>O aluno ", item.nome, " está em recuperação com a nota ",item.media,"</p>");
}
else if (item.media > 7){
alunosPass.push(item);
if (alunosPass.length == arrayAlunos.length){
    document.write ("Parabéns! Todos os alunos passaram.")
}
}

}

arrayAlunos.forEach(media);


console.log(alunosRec);