import java.util.*;
public class exe2 {
    public static void main(String[] args) {

        Scanner scanner= new Scanner(System.in);
        int escolha = 0;

            System.out.print("Digite o primeiro número:");
            int a= scanner.nextInt();
            System.out.print("Digite o segundo número:");
            int b= scanner.nextInt();
            System.out.println("Digite a operação que você quer fazer: 1 - Soma; 2 - Subtração; 3 - Divisão; 4 - Multiplicação; 5 - Sair;");
            escolha= scanner.nextInt();
            if (escolha == 1){
                int soma = a+b;
                System.out.println("A soma é:"+ soma);
            }
            else if(escolha == 2){
                int sub = a-b;
                System.out.println("A subtração é:"+ sub);
            }
            else if(escolha == 3){
                int div = a/b;
                System.out.println("A divisão é"+ div);
            }
            else if(escolha == 4){
                int mult = a*b;
                System.out.println("A multiplicação é:"+ mult);
            }

        }
}
