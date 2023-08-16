package org.tunisair.gestionbillet.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.DemandeBillet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.DemandeBillet;
@Repository
public interface DemandeBilletRepository extends JpaRepository<DemandeBillet, Long>{

}

/*@Repository
public interface DemandeBilletRepository extends JpaRepository<DemandeBillet, String>{
	
	public  Optional<DemandeBillet> findById(@Param("id") String id);

	 

	//public void delete(Optional<DemandeBillet> findById);
}*/