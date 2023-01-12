package Métodos;

public class IMC {

    public String IMCResultado(Double altura, Double peso) {
        Double alturaTotal = altura * altura;
        Double imcResultado = peso / alturaTotal;
        String imcInfo = "teste";
        if (imcResultado < 18.5) {
            imcInfo = "Muito Magro";
        } else if (imcResultado >= 18.5 && imcResultado <= 24.9) {
            imcInfo =  "Normal";

        }
        else if(imcResultado >= 25.0 && imcResultado <= 29.9){
            imcInfo = "Sobrepeso";

        }
        else if(imcResultado >= 30.0 && imcResultado <= 34.9){
            imcInfo = "Obeso grau I";
        }
        else if(imcResultado >= 35.0 && imcResultado <= 39.9){
            imcInfo = "Obeso grau II";
        }
        else if(imcResultado > 40.0){
            imcInfo = "Obesidade grau III ou Mórbido";

        }
        return imcInfo;
    }
}
