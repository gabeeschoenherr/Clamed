import java.util.Collections;
import java.util.Scanner;
import java.util.ArrayList;
public class exe6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList listaNomes = new ArrayList();
        String nomes="Lili";
        String op="Lili";

        while(!op.equals("fim"))
        {
            System.out.println("Digite um nome ou 'fim' para sair.");
            nomes = scanner.nextLine();
            op = nomes;
            listaNomes.add(nomes);

        }
        Collections.sort(listaNomes);
        listaNomes.remove(String.valueOf("fim"));
        System.out.println(listaNomes);
    }
}
