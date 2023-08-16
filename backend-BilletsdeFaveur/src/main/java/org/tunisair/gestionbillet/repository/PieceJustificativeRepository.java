package org.tunisair.gestionbillet.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.tunisair.gestionbillet.entity.DemandeBillet;
import org.tunisair.gestionbillet.entity.PieceJustificative;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.Compagnie;
@Repository
public interface PieceJustificativeRepository extends JpaRepository<PieceJustificative, Long>{

}
