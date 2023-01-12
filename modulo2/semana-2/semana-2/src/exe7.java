public class exe7 {
    public static void main(String[] args) {
        try {
            int[] num = {3,6,7};
            System.out.println(num[4]);
        }
        catch (Exception e){
            System.out.println("Essa posição não existe.");
        }
    }
}
