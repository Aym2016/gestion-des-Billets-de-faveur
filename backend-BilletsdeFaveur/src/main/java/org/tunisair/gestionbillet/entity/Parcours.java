package org.tunisair.gestionbillet.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "Parcours")
public class Parcours {
	@Id
	//@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;

	private String code ;
private String libelle ;
private String type; 

public long getId() {
	return Id;
}
public void setId(long id) {
	Id = id;
}
public List<DemandeBillet> getDemandeBillet() {
	return demandeBillet;
}
public void setDemandeBillet(List<DemandeBillet> demandeBillet) {
	this.demandeBillet = demandeBillet;
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
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
@OneToMany(mappedBy = "parcours", cascade = CascadeType.ALL)
@JsonIgnore
private List<DemandeBillet> demandeBillet;

public Parcours(long Id,String code, String libelle, String type, List<DemandeBillet> demandeBillet) {
	super();
	this.Id=Id; 
	this.code = code;
	this.libelle = libelle;
	this.type = type;
	this.demandeBillet = demandeBillet;
}
public Parcours() {
	super();
}

	
}
