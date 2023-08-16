package org.tunisair.gestionbillet.model;


import org.tunisair.gestionbillet.entity.Parcours;
import org.tunisair.gestionbillet.entity.DemandeBillet;
import org.tunisair.gestionbillet.repository.ParcoursRepository;
import org.tunisair.gestionbillet.repository.TypeBilletRepository;
import org.tunisair.gestionbillet.repository.CompagnieRepository;
import org.tunisair.gestionbillet.repository.DemandeBilletRepository;
import org.tunisair.gestionbillet.repository.MotifRepository;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.springframework.beans.factory.annotation.Autowired;

public class DemandeBilletDTO {
	
	private long idPersonnel;
	private long idParcours;
	private long idCompagnie;
	private long idTypeBillet;
	public long getIdPersonnel() {
		return idPersonnel;
	}
	public void setIdPersonnel(long idPersonnel) {
		this.idPersonnel = idPersonnel;
	}
	public long getIdParcours() {
		return idParcours;
	}
	public void setIdParcours(long idParcours) {
		this.idParcours = idParcours;
	}
	public long getIdCompagnie() {
		return idCompagnie;
	}
	public void setIdCompagnie(long idCompagnie) {
		this.idCompagnie = idCompagnie;
	}
	public long getIdTypeBillet() {
		return idTypeBillet;
	}
	public void setIdTypeBillet(long idTypeBillet) {
		this.idTypeBillet = idTypeBillet;
	}
	public DemandeBilletDTO(long idPersonnel, long idParcours, long idCompagnie, long idTypeBillet) {
		super();
		this.idPersonnel = idPersonnel;
		this.idParcours = idParcours;
		this.idCompagnie = idCompagnie;
		this.idTypeBillet = idTypeBillet;
	}
	@Override
	public String toString() {
		return "DemandeBilletDTO [idPersonnel=" + idPersonnel + ", idParcours=" + idParcours + ", idCompagnie="
				+ idCompagnie + ", idTypeBillet=" + idTypeBillet + "]";
	} 
 
	
	



}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*@Autowired
	private ParcoursRepository parcoursRepository;
	@Autowired
	private DemandeBilletRepository demandeBilletRepository;
	private Commande commande;
    private Produit produit;
    private int quantite;
	public CommandeRepository getCommandeRepository() {
		return commandeRepository;
	}
	public void setCommandeRepository(CommandeRepository commandeRepository) {
		this.commandeRepository = commandeRepository;
	}
	public ProduitRepository getProduitRepository() {
		return produitRepository;
	}
	public void setProduitRepository(ProduitRepository produitRepository) {
		this.produitRepository = produitRepository;
	}
	public Commande getCommande() {
		return commande;
	}
	public void setCommande(Commande commande) {
		this.commande = commande;
	}
	public Produit getProduit() {
		return produit;
	}
	public void setProduit(Produit produit) {
		this.produit = produit;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}*/

