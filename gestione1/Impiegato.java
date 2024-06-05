package gestione1;
public class Impiegato{
private int codiceFiscale;
private String nome;
private String cognome;

public void setCodiceFiscale(int codiceFiscale){
this.codiceFiscale = codiceFiscale;
}

public int getCodiceFiscale(){
    return codiceFiscale;
}

public void setNome(String nome){
this.nome = nome;
}

public String getNome(){
return nome;
}

public void setCognome(String cognome){
    this.cognome = cognome;
    }
    
    public String getCognome(){
    return cognome;
    }
    
    @Override
    public String toString() {
        return "Impiegato{" +
                "codiceFiscale=" + codiceFiscale +
                ", nome='" + nome + '\'' +
                ", cognome='" + cognome + '\'' +
                '}';
    }
}

