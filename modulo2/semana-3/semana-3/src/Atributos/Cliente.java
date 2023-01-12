package Atributos;

public class Cliente {
        String nomeDoCliente;
        Integer idade;
        Double peso;
        Double altura;

        String imcDoCliente;

        public Cliente(){

        }
        public Cliente(Double peso, Double altura){
                this.peso = peso;
                this.altura = altura;

        }

        public Cliente(String nomeDoCliente, Integer idade, Double peso, Double altura, String imcDoCliente){
                this.nomeDoCliente = nomeDoCliente;
                this.idade = idade;
                this.peso = peso;
                this.altura = altura;
                this.imcDoCliente = imcDoCliente;

        }

        public String getNomeDoCliente(){
                return nomeDoCliente;
        }

        public void setNomeDoCliente(String nomeDoCliente) {
                this.nomeDoCliente = nomeDoCliente;
        }

        public Integer getIdade(){
                return  idade;
        }
        public void setIdade(Integer idade){
                this.idade = idade;

        }
        public Double getPeso(){
                return  peso;
        }
        public void setPeso(Double peso){
                this.peso = peso;

        }
        public Double getAltura(){
                return  altura;
        }
        public void setAltura(Double altura){
                this.altura = altura;

        }
        public String getImcDoCliente(){
                return imcDoCliente;
        }

        public void setImcDoCliente(String imcDoCliente) {
                this.imcDoCliente = imcDoCliente;
        }

}



