package org.tunisair.gestionbillet.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.Pays;
@Repository
public interface PaysRepository extends JpaRepository<Pays, Long>{
	

}

