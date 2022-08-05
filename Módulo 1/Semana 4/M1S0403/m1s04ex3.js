
class pessoa {
    nome;
    idade;
    cpf;

    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    podeDirigir(){
        if (this.idade >= 18){
            return true;
        }
        else{
            return false;
        }
    }
}

const novaPessoa = new pessoa("Aurora",16,"546.123.655-54");


console.log(novaPessoa);
console.log(novaPessoa.podeDirigir());
