package org.tunisair.gestionbillet.repository;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tunisair.gestionbillet.entity.TypeBillet;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
  
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TypeBilletRepository extends JpaRepository<TypeBillet, Long>{

}


/*@Repository
public interface TypeBilletRepository extends CrudRepository<TypeBillet,Long>{
	
	public   TypeBillet findById( long id);
	//@Query('SELECT  FROM type_billet t');

	 

	//public void delete(Optional<Parcours> findById);
}*/