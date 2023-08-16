package org.tunisair.gestionbillet.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Responsable extends Utilisateur {
	
   

	public Responsable(long id, String username, String password, List<RoleUtilisateur> roles, String nom, String prenom,
			String cne, String tel, String adresse) {
		super(id, username, password, roles, nom, prenom, cne, tel, adresse);
		/*this.comptePaypals = comptePaypals;
		this.reservations = reservations;*/
	}

	public Responsable() {
		super();
		// TODO Auto-generated constructor stub
	}

	/*public Client(long id, String username, String password, List<RoleUtilisateur> roles, String nom, String prenom,
			String cne, String tel, String adresse) {
		super(id, username, password, roles, nom, prenom, cne, tel, adresse);
		// TODO Auto-generated constructor stub
	}*/
	
	
}
