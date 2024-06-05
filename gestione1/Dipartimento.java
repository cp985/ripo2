package gestione1;

import java.util.ArrayList;
import java.util.List;

public class Dipartimento {
private String nome;
private String cittàSede;
private String regioneSede;
private int numeroTelefonico;
private Impiegato nomeDirigente;
private List<Impiegato> impiegatoDipartimento = new ArrayList<>();
    
public void setNome(String nome) {
this.nome = nome;

}

public String getNome(){
return nome;
}

public void setCittàSede(String cittàSede) {
    this.cittàSede = cittàSede;
    
    }
    
    public String getCittàSede(){
    return cittàSede;
    }

    public void setRegioneSede(String regioneSede) {
        this.regioneSede = regioneSede;
        
        }
        
        public String getRegioneSede(){
        return regioneSede;
        }
    
    
        public void setNumeroTelefonico(int numeroTelefonico) {
            this.numeroTelefonico = numeroTelefonico;
            
            }
            
            public int getNumeroTelefonico(){
            return numeroTelefonico;
            }
        
              
        public void setNomeDirigente(Impiegato nomeDirigente) {
            this.nomeDirigente = nomeDirigente;
            
            }
            
            public Impiegato getNomeDirigente(){
            return nomeDirigente;
            }

    
    public void setImpiegato(List<Impiegato> impiegatoDipartimento) {
    this.impiegatoDipartimento = impiegatoDipartimento;
                
    }
                
    public List<Impiegato> getImpiegatoDipartimento(){
    return impiegatoDipartimento;
     }
    

     @Override
     public String toString() {
         return "Dipartimento{" +
                 "nome='" + nome + '\'' +
                 ", cittàSede='" + cittàSede + '\'' +
                 ", regioneSede='" + regioneSede + '\'' +
                 ", numeroTelefonico=" + numeroTelefonico +
                 ", nomeDirigente=" + nomeDirigente +
                 ", impiegatoDipartimento=" + impiegatoDipartimento +
                 '}';
     }
 }




