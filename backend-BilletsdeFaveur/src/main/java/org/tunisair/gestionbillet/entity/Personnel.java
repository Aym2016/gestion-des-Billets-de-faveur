package org.tunisair.gestionbillet.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

//import org.springframework.web.bind.annotation.ResponseBody;
import org.tunisair.gestionbillet.resolver.EntityIdResolver;

//import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
//@SuppressWarnings("serial")
/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "matricule")*/
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "matricule",
        resolver = EntityIdResolver.class
        ,scope=Personnel.class)
//@JsonInclude(JsonInclude.Include.NON_NULL)
//@JsonIdentityInfo(generator=JSOGGenerator.class)
@Entity
@Table(name = "Personnel")
/*@JsonInclude(JsonInclude.Include.ALWAYS)
@ResponseBody*/
//@JsonAutoDetect
//@TypeDef(name = "json", typeClass = JsonType.class)
public class Personnel {
	//private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 @JsonProperty("matricule")
	private long matricule;
	
	@OneToMany(mappedBy = "personnel", cascade = CascadeType.ALL)
	//@JsonIgnore
	//@org.codehaus.jackson.annotate.JsonIgnore("demandeBillet")
	private List<DemandeBillet> demandeBillet;
	public List<DemandeBillet> getDemandeBillet() {
		return demandeBillet;
	}
	public void setDemandeBillet(List<DemandeBillet> demandeBillet) {
		this.demandeBillet = demandeBillet;
	} 
	@OneToMany(mappedBy = "personnel1", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	//@JsonIgnore
	//@JsonManagedReference(value = "personnel-pieceJustificative")
	//private Set<PieceJustificative> PieceJustificative = new HashSet<>();
	private List<PieceJustificative> PieceJustificative;
	public List<PieceJustificative> getPieceJustificative() {
		return PieceJustificative;
	}
	public void setPieceJustifcative(List<PieceJustificative> PieceJustificative) {
		this.PieceJustificative = PieceJustificative;
	}
	private String prenom;
	private int echelle;
	private String corps;
	private String emploi;
	private String statut;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateEmbauche;
	
	private String PosActivite;
	private String fonction;
	
	public long getMatricule() {
		return matricule;
	}
	public void setMatricule(long matricule) {
		this.matricule = matricule;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getEchelle() {
		return echelle;
	}
	public void setEchelle(int echelle) {
		this.echelle = echelle;
	}
	public String getCorps() {
		return corps;
	}
	public void setCorps(String corps) {
		this.corps = corps;
	}
	public String getEmploi() {
		return emploi;
	}
	public void setEmploi(String emploi) {
		this.emploi = emploi;
	}
	public Date getDateEmbauche() {
		return dateEmbauche;
	}
	public void setDateEmbauche(Date dateEmbauche) {
		this.dateEmbauche = dateEmbauche;
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	public String getPosActivite() {
		return PosActivite;
	}
	public void setPosActivite(String posActivite) {
		PosActivite = posActivite;
	}
	public String getFonction() {
		return fonction;
	}
	public void setFonction(String fonction) {
		this.fonction = fonction;
	}
	@Override
	public String toString() {
		return "Personnel [matricule=" + matricule + ", prenom=" + prenom + ", echelle=" + echelle + ", corps=" + corps
				+ ", emploi=" + emploi + ", statut=" + statut + ", PosActivite=" + PosActivite + ", fonction="
				+ fonction + "]";
	}
	
	
	public Personnel(long matricule, String prenom, int echelle, String corps, String emploi, String statut,
			String posActivite, String fonction,List<DemandeBillet> demandeBillet) {
		super();
		this.matricule = matricule;
		this.prenom = prenom;
		
		this.echelle = echelle;
		this.corps = corps;
		this.emploi = emploi;
		this.statut = statut;
		this.PosActivite = posActivite;
		this.fonction = fonction;
		this.demandeBillet=demandeBillet;
	}
	public Personnel() {
		super();
	} 
	
	
	

}
