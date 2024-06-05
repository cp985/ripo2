package gestione1;

import java.util.ArrayList;
import java.util.List;

public class Progetto {
    private String nome;
    private String città;
    private int budget;
    private List<Impiegato> impiegatoProgetto = new ArrayList<>();

public Progetto(String nome){
this.nome=nome;
}        
    public String getNome(){
    return nome;
    }
        
    public void setCittà(String città){
    this.città = città;
    }
  
    public String getCittà(){
    return città;
     }
            
    public void setBudget(int budget){
    this.budget = budget;
    }
            
    public int getBudget(){
    return budget;
     }

     public void setImpiegatoProgetto(List<Impiegato> impiegatoProgetto){
    this.impiegatoProgetto = impiegatoProgetto;
    }
                
    public List<Impiegato> getImpiegatoProgetto(){
    return impiegatoProgetto;
    }
    
    @Override
    public String toString() {
        return "Progetto{" +
                "nome='" + nome + '\'' +
                ", città='" + città + '\'' +
                ", budget=" + budget +
                ", impiegatoProgetto=" + impiegatoProgetto +
                '}';
    }
}

