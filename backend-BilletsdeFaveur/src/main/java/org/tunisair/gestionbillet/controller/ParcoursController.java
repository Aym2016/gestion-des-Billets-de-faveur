package org.tunisair.gestionbillet.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.tunisair.gestionbillet.entity.Parcours;
import org.tunisair.gestionbillet.repository.ParcoursRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.tunisair.gestionbillet.entity.Parcours;
import org.tunisair.gestionbillet.repository.ParcoursRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class ParcoursController {
	@Autowired
	private ParcoursRepository ParcoursRepository;
	
	// get all Parcourss
	@GetMapping("/Parcours")
	public List<Parcours> getAllParcours(){
		return ParcoursRepository.findAll();
	}		
	
	// create Parcours rest api
	@PostMapping("/Parcours")
	public Parcours createParcour(@RequestBody Parcours Parcours) {
		return ParcoursRepository.save(Parcours);
	}
	
	// get Parcours by id rest api
	@GetMapping("/Parcours/{id}")
	public ResponseEntity<Parcours> getParcoursById(@PathVariable long id) {
		Parcours Parcours = ParcoursRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Parcours not exist with id :" + id));
		return ResponseEntity.ok(Parcours);
	}
	
	// update Parcours rest api
	
	@PutMapping("/Parcours/{id}")
	public ResponseEntity<Parcours> updateParcour(@PathVariable long id, @RequestBody Parcours ParcoursDetails){
		Parcours Parcours = ParcoursRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Parcours not exist with id :" + id));
		
		//Parcours.setId();
		Parcours.setCode(ParcoursDetails.getCode());
		Parcours.setLibelle(ParcoursDetails.getLibelle());
		
		Parcours updatedParcours = ParcoursRepository.save(Parcours);
		return ResponseEntity.ok(updatedParcours);
	}
	
	// delete Parcours rest api
	@DeleteMapping("/Parcours/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteParcours(@PathVariable Long id){
		Parcours Parcours = ParcoursRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Parcours not exist with id :" + id));
		
		ParcoursRepository.delete(Parcours);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	