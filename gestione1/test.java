package gestione1;

    //   Scanner scan = new Scanner(System.in);
    // System.out.println("inserisci la base..");
    //   int base1 = scan.nextInt();

public class test{
 public  static void main(String[] args){
    Gestione gestione = new Gestione();
    Impiegato impiegato1 = new Impiegato();
    Progetto progetto1 = new Progetto("Ajeje");
    Dipartimento dipartimento1 = new Dipartimento();

    impiegato1.setNome("gino");
    impiegato1.setCognome("rino");
    impiegato1.setCodiceFiscale(333666999);

    progetto1.setBudget(10000000);
    progetto1.setCittà("Savona");
    
    dipartimento1.setNumeroTelefonico(333956567);
    dipartimento1.setCittàSede("genova");
    dipartimento1.setRegioneSede("Liguria");
    dipartimento1.setNomeDirigente(impiegato1);
    dipartimento1.setNome("Brazorf");

    gestione.addDipartimento(dipartimento1);
   gestione.addProgetto(progetto1);
   gestione.addImpiegato(impiegato1);
   gestione.associaImpiegatoDipartimento(dipartimento1,impiegato1);
   gestione.associaImpiegatoProgetto(progetto1, impiegato1);
 
System.out.println(gestione.toString());


}
}

