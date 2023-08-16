package org.tunisair.gestionbillet.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Motif")
public class Motif {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	//@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
    private long Id;
	private String code ;
private String libelle ;



public long getId() {
	return Id;
}
public void setId(long id) {
	Id = id;
}
public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}
public String getLibelle() {
	return libelle;
}
public void setLibelle(String libelle) {
	this.libelle = libelle;
}

public Motif(long id, String code, String libelle) {
	super();
	Id = id;
	this.code = code;
	this.libelle = libelle;
}
@Override
public String toString() {
	return "Motif [code=" + code + ", libelle=" + libelle + "]";
}
public Motif() {
	super();
}


}
