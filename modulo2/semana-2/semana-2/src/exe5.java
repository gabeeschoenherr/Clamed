import java.util.Scanner;
import java.util.ArrayList;
public class exe5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList listaNomes = new ArrayList();

        for(int i = 0; i<9 ; i++){
            System.out.println("Digite um nome: ");
            String nomes = scanner.nextLine();
            listaNomes.add(nomes);
        }
        for(int a = 0; a<9 ; a++){
            System.out.println("O nome: "+ listaNomes.get(a) + " na posição: "+ a);
        }
    }
}
