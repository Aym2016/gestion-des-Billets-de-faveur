package org.tunisair.gestionbillet.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tunisair.gestionbillet.entity.Personnel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonnelRepository extends JpaRepository<Personnel, Long>
{

}

/*@Repository
public interface PersonnelRepository extends JpaRepository<Personnel, String>{
	
	public  Optional<Personnel> findById(@Param("id") String id);

	 

	//public void delete(Optional<Personnel> findById);
}*/