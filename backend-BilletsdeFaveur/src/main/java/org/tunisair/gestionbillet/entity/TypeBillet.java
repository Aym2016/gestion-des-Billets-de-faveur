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
@Table(name = "TypeBillet")
public class TypeBillet {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
	private long id;
	private String code;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	private String libelle;
	@OneToMany(mappedBy = "typeBillet", cascade = CascadeType.ALL)
	@JsonIgnore
    private List<DemandeBillet> demandeBillet;
	
	
	public List<DemandeBillet> getDemandeBillet() {
		return demandeBillet;
	}
	public void setDemandeBillet(List<DemandeBillet> demandeBillet) {
		this.demandeBillet = demandeBillet;
	}
		
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	public TypeBillet(long id,String code, String libelle, List<DemandeBillet> demandeBillet) {
		super();
		this.id = id;
		this.code=code;
		this.libelle = libelle;
		this.demandeBillet = demandeBillet;
	} 
	
	public TypeBillet() {
		super();
	}
	@Override
	public String toString() {
		return "TypeBillet [id=" + id + ", libelle=" + libelle + "]";
	} 
	
	
	
}
