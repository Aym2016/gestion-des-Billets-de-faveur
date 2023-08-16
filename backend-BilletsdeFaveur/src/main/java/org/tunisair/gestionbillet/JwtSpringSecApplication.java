package org.tunisair.gestionbillet;

import java.util.ArrayList;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

import org.tunisair.gestionbillet.entity.RoleUtilisateur;
import org.tunisair.gestionbillet.entity.Utilisateur;


@SpringBootApplication
public class JwtSpringSecApplication implements CommandLineRunner {

	//@Autowired
	//private ChambreRepository chambreRepository;
	
	//@Autowired
//	private CategorieChambreRepository categorieChambreRepository;
	public static void main(String[] args)  {
		SpringApplication.run(JwtSpringSecApplication.class, args);
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		
		/*CategorieChambre categorieChambre1 = new CategorieChambre(0, "catégorie I", null);
		CategorieChambre categorieChambre2 = new CategorieChambre(0, "catégorie II", null);
		CategorieChambre categorieChambre3 = new CategorieChambre(0, "catégorie III", null);
		CategorieChambre categorieChambre4 = new CategorieChambre(0, "catégorie V", null);
		
		
		categorieChambreRepository.save(categorieChambre1);
		categorieChambreRepository.save(categorieChambre2);
		categorieChambreRepository.save(categorieChambre3);
		categorieChambreRepository.save(categorieChambre4);
		
		chambreRepository.save(new Chambre(0, 1470, "description this chambre-1470", null, null, 2, 3, categorieChambre1));
		chambreRepository.save(new Chambre(0, 1400, "description this chambre-1400", null, null, 2, 3, categorieChambre2));
		chambreRepository.save(new Chambre(0, 1000, "description this chambre-1000", null, null, 2, 3, categorieChambre1));
		chambreRepository.save(new Chambre(0, 900, "description this chambre-900", null, null, 2, 3, categorieChambre2));
		chambreRepository.save(new Chambre(0, 2000, "description this chambre-2000", null, null, 2, 3, categorieChambre1));
		chambreRepository.save(new Chambre(0, 7840, "description this chambre-6930", null, null, 2, 3, categorieChambre4));
		chambreRepository.save(new Chambre(0, 4710, "description this chambre6834", null, null, 2, 3, categorieChambre1));
		chambreRepository.save(new Chambre(0, 6930, "description this chambre6930", null, null, 2, 3, categorieChambre2));
		*/
		
		
		
		
	}
}
