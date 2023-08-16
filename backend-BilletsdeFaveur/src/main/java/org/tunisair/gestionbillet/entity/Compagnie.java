package org.tunisair.gestionbillet.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;

@Entity
@Table(name = "Compagnie")
public class Compagnie {
	
	
	//@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private long id;
	private String code ;
	private String libelle ;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public Compagnie(String code, String libelle) {
		super();
		this.code = code;
		this.libelle = libelle;
	}
	public Compagnie() {
		super();
	}
	@Override
	public String toString() {
		return "Compagnie [code=" + code + ", libelle=" + libelle + "]";
	}
	
	
}
