package gestione1;
import java.util.ArrayList;
import java.util.List;

public class Gestione{

List<Impiegato> impiegato = new ArrayList<>();  
List<Progetto> progetto = new ArrayList<>();
List<Dipartimento> dipartimento = new ArrayList<>();


public void addImpiegato(Impiegato imp){
impiegato.add(imp);
}

public void deleteImpiegato(int cf){
for (Impiegato i : impiegato){ {
    if(i.getCodiceFiscale()==cf){
        impiegato.remove(i);
        break;
        
    }
    
}
}
}

public void addProgetto(Progetto pro){
progetto.add(pro);

}

public void deleteProgetto (String pro){
    for (Progetto i : progetto){ {
        if(i.getNome().equals(pro)){
            progetto.remove(i);
            break;
            
        }
        
    }
    }
    }
    public void associaImpiegatoProgetto(Progetto pro ,Impiegato imp){
    for (Progetto i : progetto) {
          
        if(i.getNome().equals(pro.getNome())){
          i.getImpiegatoProgetto().add(imp);
 }}}
public void addDipartimento(Dipartimento dip){
    dipartimento.add(dip);
    
    }
        
    public void deleteDipartimento(String dip){
        for (Dipartimento i : dipartimento){ {
            if(i.getNome().equals(dip)){
                dipartimento.remove(i);
                break;
                
            }
            
        }
        }
        }
public void associaImpiegatoDipartimento(Dipartimento pro ,Impiegato imp){
for (Dipartimento i : dipartimento) {
                  
     if(i.getNome().equals(pro.getNome())){
    i.getImpiegatoDipartimento().add(imp);
}}}

@Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Gestione: \n");

        // Stampa informazioni sugli impiegati
        sb.append("Impiegati:\n");
        for (Impiegato i : impiegato) {
            sb.append(i).append("\n");
        }

        // Stampa informazioni sui progetti
        sb.append("Progetti:\n");
        for (Progetto p : progetto) {
            sb.append(p).append("\n");
        }

        // Stampa informazioni sui dipartimenti
        sb.append("Dipartimenti:\n");
        for (Dipartimento d : dipartimento) {
            sb.append(d).append("\n");
        }

        return sb.toString();
    }
}


