package org.tunisair.gestionbillet.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.Motif;
@Repository
public interface MotifRepository extends JpaRepository<Motif, Long>{

}
