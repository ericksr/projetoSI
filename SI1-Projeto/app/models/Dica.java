package models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Dica")
public class Dica implements Comparable<Dica>{
    @Id
    @GeneratedValue
    private long id;
    @Column
    private String titulo, conteudo, autor;
    @Column
    private int concordancias,discordancias;
    @Column
    private double indiceConcordancia;
    @Column
    private int conteudoInapropriado;
    @Column
    @OneToMany
    private List<User> usuariosComVoto;

    public Dica(){
        usuariosComVoto = new ArrayList<>();
    }

    public Dica(String autor, String titulo, String conteudo) {
        this();
        setAutor(autor);
        setTitulo(titulo);
        setConteudo(conteudo);
        concordancias = 0;
        discordancias = 0;
        indiceConcordancia = 0.0;
        conteudoInapropriado = 0;
    }

    public long getId(){
        return id;
    }
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void addConcordancia(){
        concordancias++;
        calculaIndiceConcordancia();
    }

    public int getConcordancias(){
        return concordancias;
    }

    public void addDiscordancia(){
        discordancias++;
        calculaIndiceConcordancia();
    }

    public int getDiscordancias(){
        return discordancias;
    }

    public void calculaIndiceConcordancia(){
        if(concordancias>=1 && discordancias==0){
            indiceConcordancia = 0;
        }else if(concordancias==0 && discordancias>=1){
            indiceConcordancia = discordancias;
        }else{
            indiceConcordancia = concordancias/(concordancias+discordancias);
        }
    }

    public double getIndiceConcordancia(){
        return indiceConcordancia;
    }

    public int compareTo(Dica dica){
        if(this.getConcordancias() > dica.getConcordancias()){
            return -1;
        }else if(this.getConcordancias() < dica.getConcordancias()){
            return 1;
        }else{
            return 0;
        }
    }

    public void addConteudoInapropriado() {
        conteudoInapropriado++;
    }

    public int getConteudoInapropriado() {
        return conteudoInapropriado;
    }

    public List<User> getUsuariosComVoto() {
        return usuariosComVoto;
    }

    public void addUsuarioComVoto(User usuario){
        usuariosComVoto.add(usuario);
    }
}


