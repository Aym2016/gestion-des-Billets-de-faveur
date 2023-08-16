package org.tunisair.gestionbillet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.Parcours;
@Repository
public interface ParcoursRepository extends JpaRepository<Parcours, Long>{

}

