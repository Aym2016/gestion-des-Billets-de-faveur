package org.tunisair.gestionbillet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.RoleUtilisateur;

public interface RoleUtilisateurRepository extends JpaRepository<RoleUtilisateur, Integer> {
	RoleUtilisateur findByRoleName(String roleName);
}
