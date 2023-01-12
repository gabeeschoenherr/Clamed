package Atributos;

import Métodos.IMC;

public class Main {
    public static void main(String[] args) {
        Cliente cliente1 = new Cliente();
        cliente1.nomeDoCliente = "Leila Lopes";
        cliente1.idade = 18;
        cliente1.altura = 1.55;
        cliente1.peso = 53.0;
        IMC imc = new IMC();
        cliente1.imcDoCliente = imc.IMCResultado(cliente1.altura, cliente1.peso);
        System.out.println(cliente1.imcDoCliente);
        Clinica clinica = new Clinica();
        clinica.CategorizarClientes(cliente1);
        clinica.tratamento(cliente1);
        clinica.listaDeClientes.forEach(cliente -> System.out.println("O cliente "+cliente.nomeDoCliente+" com o peso "+cliente.peso+", tem o IMC "+cliente.imcDoCliente));
        clinica.tratamento(cliente1, 10.00);
        cliente1.imcDoCliente = imc.IMCResultado(cliente1.altura, cliente1.peso);
        clinica.listaDeClientes.forEach(cliente -> System.out.println("O cliente "+cliente.nomeDoCliente+" com o peso "+cliente.peso+", tem o IMC "+cliente.imcDoCliente));



    }
}