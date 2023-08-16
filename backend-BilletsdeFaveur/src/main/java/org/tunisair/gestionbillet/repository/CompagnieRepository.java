package org.tunisair.gestionbillet.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.tunisair.gestionbillet.entity.Compagnie;
@Repository
public interface CompagnieRepository extends JpaRepository<Compagnie, Long>{

}






/*import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.Compagnie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface CompagnieRepository extends JpaRepository<Compagnie, String>{

	Optional<Compagnie> findById(long id);
	
	/*public default Optional<Compagnie> findById(@Param("id") long id) {
		// TODO Auto-generated method stub
		return null;
	}*/

	 

	//public void delete(Optional<Compagnie> findById);
/*}*/