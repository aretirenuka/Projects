import java.util.Scanner;
public class Pizza {
    public static int veg(){
        Scanner sc1=new Scanner(System.in);
        int k,n=0;
        System.out.println("Enter your choice:");
        k=sc1.nextInt();
        if(k==1){
            System.out.println("Select a crust\n1.Thin\n2.Pan");
            n=vegdeluxe();
            return n;
        }
        else if(k==2){
            System.out.println("Select a crust\n1.Thin\n2.Pan");
            n=vegsupreme();
            return n;
        }
        else{
            System.out.println("INVALID CHOICE");
            n=veg();
            return n;
        }
    
    }
    public static int nonveg(){
        Scanner sc2=new Scanner(System.in);
        int k,n=0;
        System.out.println("Enter your choice:");
        k=sc2.nextInt();
        if(k==1){
            System.out.println("Select a crust\n1.Thin\n2.Pan");
            n=nonvegtikka();
            return n;
        }
        else if(k==2){
            System.out.println("Select a crust\n1.Thin\n2.Pan");
            n=nonvegsupreme();
            return n;
        }
        else{
            System.out.println("INVALID CHOICE");
            n=nonveg();
            return n;
        }
    }
    public static int vegdeluxethin(){
        Scanner sc1=new Scanner(System.in);
         int num;
         System.out.println("Enter your choice:");
         num=sc1.nextInt();
         if(num==1){
             System.out.println("You have selected Veg Deluxe Medium size pizza with a thin crust and the Price is Rs 550");
             return(550);
         }
         else if(num==2){
             System.out.println("You have selected Veg Deluxe Large size pizza with a thin crust and the Price is Rs 750");
             return(750);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=vegdeluxethin();
             return n;
         } 
     }
     public static int vegdeluxepan(){
        Scanner sc=new Scanner(System.in);
         int num;
         System.out.println("Enter your choice:");
         num=sc.nextInt();
         if(num==1){
             System.out.println("You have selected Veg Deluxe Medium size pizza with a pan crust and the Price is Rs 600");
             return(600);
         }
         else if(num==2){
             System.out.println("You have selected Veg Deluxe Large size pizza with a pan crust and the Price is Rs 900");
             return(900);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=vegdeluxepan();
             return n;
         } 
     }
     public static int vegsupremethin(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Veg Supreme Medium size pizza with a thin crust and the Price is Rs 600");
             return(600);
         }
         else if(ch1==2){
             System.out.println("You have selected Veg Supreme Large size pizza with a thin crust and the Price is Rs 800");
             return(800);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=vegsupremethin();
             return n;
         } 
     }
     public static int vegsupremepan(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Veg Supreme Medium size pizza with a pan crust and the Price is Rs 650");
             return(650);
         }
         else if(ch1==2){
             System.out.println("You have selected Veg Supreme Large size pizza with a pan crust and the Price is Rs 950");
             return(950);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=vegsupremepan();
             return n;
         } 
     }
     public static int nonvegtikkathin(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Non-Veg Tikka Medium size pizza with a thin crust and the Price is Rs 800");
             return(800);
         }
         else if(ch1==2){
             System.out.println("You have selected Non-Veg Tikka Large size pizza with a thin crust and the Price is Rs 900");
             return(900);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=nonvegtikkathin();
             return n;
         } 
     }
     public static int nonvegtikkapan(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Non-Veg Tikka Medium size pizza with a pan crust and the Price is Rs 850");
             return(850);
         }
         else if(ch1==2){
             System.out.println("You have selected Non-Veg Tikka Large size pizza with a pan crust and the Price is Rs 1050");
             return(1050);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=nonvegtikkapan();
             return n;
         } 
     }
     public static int nonvegsupremethin(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Non-Veg Supreme Medium size pizza with a thin crust and the Price is Rs 700");
             return(700);
         }
         else if(ch1==2){
             System.out.println("You have selected Non-Veg Supreme Large size pizza with a thin crust and the Price is Rs 800");
             return(800);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=nonvegsupremethin();
             return n;
         } 
     }
     public static int nonvegsupremepan(){
        Scanner sc=new Scanner(System.in);
         int ch1;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("You have selected Non-Veg Supreme Medium size pizza with a pan crust and the Price is Rs 750");
             return(750);
         }
         else if(ch1==2){
             System.out.println("You have selected Non-Veg Supreme Large size pizza with a pan crust and the Price is Rs 950");
             return(950);
         }
         else{
             System.out.println("INVALID CHOICE");
             int n=nonvegsupremepan();
             return n;
         } 
     }
     public static int vegdeluxe(){
         Scanner sc=new Scanner(System.in);
         int ch1,n=0;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=vegdeluxethin();
             return n;
         }
         else if(ch1==2){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=vegdeluxepan();
             return n;
         }
         else{
             System.out.println("INVALID CHOICE");
             n=vegdeluxe();
             return n;
         }
     }
     public static int nonvegsupreme(){
         Scanner sc=new Scanner(System.in);
         int ch1,n=0;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=nonvegsupremethin();
             return n;
         }
         else if(ch1==2){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=nonvegsupremepan();
             return n;
         }
         else{
             System.out.println("INVALID CHOICE");
             n=nonvegsupreme();
             return n;
         }
     }
     public static int nonvegtikka(){
         Scanner sc=new Scanner(System.in);
         int ch1,n;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=nonvegtikkathin();
             return n;
         }
         else if(ch1==2){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=nonvegtikkapan();
             return n;
         }
         else{
             System.out.println("INVALID CHOICE");
             n=nonvegtikka();
             return n;
         }
     }
     public static int vegsupreme(){
         Scanner sc=new Scanner(System.in);
         int ch1,n=0;
         System.out.println("Enter your choice:");
         ch1=sc.nextInt();
         if(ch1==1){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=vegsupremethin();
             return n;
         }
         else if(ch1==2){
             System.out.println("Select a size\n1.Medium\n2.Large");
             n=vegsupremepan();
             return n;
         }
         else{
             System.out.println("INVALID CHOICE");
             n=vegsupreme();
             return n;
         }
     }
    
    
    public static int piz()
    {
        Scanner sc=new Scanner(System.in);
        int ch1,n=0;
        System.out.println("Enter your choice:");
        ch1=sc.nextInt();
        if(ch1==1){
            System.out.println("What would you like to have\n1.Veg Deluxe\n2.Veg Supreme");
            n=veg();
            return n;
        }
        else if(ch1==2){
            System.out.println("What would you like to have\n1.Non-Veg Tikka\n2.Non-Veg Supreme");
            n=nonveg();
            return n;
        }
        else{
            System.out.println("INVALID CHOICE");
            n=piz();
            return n;
        }
    }
    public static int yon() {
        Scanner sc=new Scanner(System.in);
        int ch1,n=0;
        System.out.println("Enter your choice:");
        ch1=sc.nextInt();
        if(ch1==1){
            return 1;
        }
        else if(ch1==2){
            return 0;
        }
        else{
            System.out.println("INVALID CHOICE");
            n=yon();
            return n;
        }
    }
 public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  System.out.println("Enter Your name");
  String name = sc.nextLine();
  System.out.println("Enter Your mobile number");
  long mno = sc.nextLong();
  sc.nextLine();
  System.out.println("Enter Your Address");
   String address = sc.nextLine();
   System.out.println("Enter Your Email");
   String email = sc.nextLine();
   System.out.println("Welcome to D pizza ms/mr:"+name);
  System.out.println("                                Pizzas Menu");
  System.out.println("                               -----------");
  System.out.println("                      Veg Menu");
  System.out.println("Pizza Type            Crust             Meduim             Large");
  System.out.println("==================================================================");
  System.out.println("Vegie Deluxe          Thin/Pan          500/600           750/900");
  System.out.println("Veg Supreme           Thin/Pan          600/650           800/950");
  System.out.println();
  System.out.println("                       Non Veg Menu");
  System.out.println("Chicken Supreme       Thin/Pan          700/750           800/950");
  System.out.println("Chicken Tikka         Thin/Pan          800/850           900/1050");
  System.out.println("What would you like to Order?");
  System.out.println("1 .veg");
  System.out.println("2.non veg");
  System.out.println("3.exit");
  int sum=0;
  sum+=piz();
  int yn=0;
    System.out.println("Would you like to add another pizza?\n1.Yes\n2.No");
        yn=yon();
        while(yn==1){
            System.out.println("What would you like to order?\n1.Veg\n2.Non Veg");
            sum+=piz();
            System.out.println("Would you like to add another pizza?\n1.Yes\n2.No");
            yn=yon();
}
System.out.println(sum +" is your total amount");
}
}