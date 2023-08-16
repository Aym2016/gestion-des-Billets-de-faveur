package org.tunisair.gestionbillet.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "DemandeBillet")
public class DemandeBillet {


	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private long idDemande;
	//private String matricule;
	/*private String libelle;
	private String nom ;*/
	
	/*public String getMatricule() {
		return matricule;
	}*/
	public long getIdDemande() {
		return idDemande;
	}
	public void setIdDemande(long idDemande) {
		this.idDemande = idDemande;
	}
	/*public void setMatricule(String matricule) {
		this.matricule = matricule;
	}*/
	
	
	@ManyToOne
	@JsonIgnore
    private Personnel personnel;
	
	@ManyToOne
	@JsonIgnore
    private TypeBillet typeBillet;
	
	@ManyToOne
	@JsonIgnore
    private Parcours parcours;
	
	
	public Parcours getParcours() {
		return parcours;
	}
	public void setParcours(Parcours parcours) {
		this.parcours = parcours;
	}

	@Temporal(TemporalType.TIMESTAMP)
	private Date dateAller;
	
	public Date getDateAller() {
		return dateAller;
	}	
	public void setDateAller(Date dateAller) {
		this.dateAller = dateAller;
	}
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateRetour;
	
	public Date getDateRetour() {
		return dateRetour;
	}	
	public void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}
	
	
	public TypeBillet getTypeBillet() {
		return typeBillet;
	}
	public void setTypeBillet(TypeBillet typeBillet) {
		this.typeBillet = typeBillet;
	} 
	
	
	
	public DemandeBillet(long idDemande, TypeBillet typeBillet,Personnel personnel, Parcours parcours, Date dateAller, Date dateRetour
			) {
		super();
		this.idDemande=idDemande;
		//this.OEBF=OEBF;
		//this.matricule = matricule;
		this.typeBillet = typeBillet;
		this.parcours = parcours;
		this.dateAller = dateAller;
		this.dateRetour = dateRetour;
		this.personnel=personnel;
	}
	/*public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmploi() {
		return emploi;
	}
	public void setEmploi(String emploi) {
		this.emploi = emploi;
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}*/
	/*private String prenom;
	private int echelle;
	private String corps;
	private String emploi;
	private String statut;
	/*private String fonction;*/
	
	public Personnel getPersonnel() {
		return personnel;
	}
	public void setPersonnel(Personnel personnel) {
		this.personnel = personnel;
	}
	public DemandeBillet() {
		super();
	}
	public void setCompagnie(Compagnie compagnie) {
		
		// TODO Auto-generated method stub
		
	} 
	
	
	
	
	
}
