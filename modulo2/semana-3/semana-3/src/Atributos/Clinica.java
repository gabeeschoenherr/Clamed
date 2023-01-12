package Atributos;

import java.util.ArrayList;

public class Clinica {
    ArrayList<Cliente> listaDeClientes= new ArrayList<>();
    String nomeDoDono = "Afonso Charles";

    public Clinica(){

    }
    public Clinica(String nomeDoDono){
        this.nomeDoDono = nomeDoDono;
    }

    public Clinica(String nomeDoDono, ArrayList listaDeClientes){
        this.nomeDoDono = nomeDoDono;
        this.listaDeClientes = listaDeClientes;
    }
    public void CategorizarClientes(Cliente cliente) {
        listaDeClientes.add(cliente);



    }
    public Cliente tratamento (Cliente cliente){
        cliente.setPeso(cliente.getPeso()-5.0);
        return cliente;
    }
    public Cliente tratamento (Cliente cliente, Double num){
        cliente.setPeso(cliente.getPeso()-num);
        return cliente;
    }
}
