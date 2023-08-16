package org.tunisair.gestionbillet.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.TypeDecision;
@Repository
public interface TypeDecisionRepository extends JpaRepository<TypeDecision, Long>{

}

