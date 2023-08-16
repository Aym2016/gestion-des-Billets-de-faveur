package org.tunisair.gestionbillet.repository;
//package org.tunisair.gestionbillet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.Responsable;
//import org.tunisair.gestionbillet.entity.Employe;
import org.tunisair.gestionbillet.entity.Utilisateur;

public interface ClientRepository extends JpaRepository<Responsable, Integer>{
	public  Responsable findById(long id);
	public  Responsable findByUsername(String username);
	
}