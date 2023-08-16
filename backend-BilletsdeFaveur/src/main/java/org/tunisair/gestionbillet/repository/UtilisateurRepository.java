package org.tunisair.gestionbillet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{
	public  Utilisateur findByUsername(String username);
	public  Utilisateur findById(long id);
}
