package org.tunisair.gestionbillet.entity;
import org.tunisair.gestionbillet.resolver.*;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
//import com.fasterxml.jackson.annotation.NoArgsConstructor;
//import lombok.NoArgsConstructor;
//@JsonIdentityInfo(        generator = ObjectIdGenerators.PropertyGenerator.class,        property = "id")
//@JsonInclude(JsonInclude.Include.NON_NULL)
//@NoArgsConstructor
/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")*/
/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        resolver = EntityIdResolver.class,
        scope=PieceJustificative.class)*/
//@JsonIdentityInfo(generator=JSOGGenerator.class)
//@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name = "PieceJustificative")

public class PieceJustificative  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private long id;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
/*	public Personnel getPersonnel1() {
		return personnel1;
	}
	public void setPersonnel1(Personnel personnel1) {
		this.personnel1 = personnel1;
	}*/
	private String code;
    private String libelle;
    @ManyToOne //(fetch= FetchType.EAGER) //(fetch = FetchType.LAZY)
	//@JsonIgnore
   // @JsonManagedReference(value = "personnel-pieceJustificative")
	//@JoinColumn(name="PieceJustificative", nullable=true)
	//
	//@JoinColumn(name = "personnel")
    @JsonBackReference(value = "matricule")
    private Personnel personnel1;
    //@JsonProperty
    public Personnel getPersonnel() {
		return personnel1;
	}
    //@JsonIgnore
    public void setPersonnel(Personnel personnel) {
		this.personnel1 = personnel;
	}
	public String getCode() {
		return code;
	}
	public void setCodePiece(String code) {
		this.code = code;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	
	public PieceJustificative(long id,String code, String libelle, Personnel personnel) {
		super();
		
		this.id=id;
		this.code = code;
		this.libelle = libelle;
		this.personnel1 = personnel;
	}
	
	public PieceJustificative() {
		super();
	}
	@Override
	public String toString() {
		return "PieceJustificative [id=" + id + ", CodePiece=" + code + ", libelle=" + libelle + ", personnel1="
				+ personnel1 + "]";
	} 
    
}
