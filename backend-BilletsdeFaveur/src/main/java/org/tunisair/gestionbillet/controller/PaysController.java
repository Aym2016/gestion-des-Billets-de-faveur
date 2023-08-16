package org.tunisair.gestionbillet.controller;
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

import org.tunisair.gestionbillet.entity.Pays;
import org.tunisair.gestionbillet.repository.PaysRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PaysController {
	@Autowired
	private PaysRepository PaysRepository;
	
	// get all Payss
	@GetMapping("/Pays")
	public List<Pays> getAllPayss(){
		return PaysRepository.findAll();
	}		
	
	// create Pays rest api
	@PostMapping("/Pays")
	public Pays createPays(@RequestBody Pays Pays) {
		return PaysRepository.save(Pays);
	}
	
	// get Pays by id rest api
	@GetMapping("/Pays/{id}")
	public ResponseEntity<Pays> getPaysById(@PathVariable long id) {
		Pays Pays = PaysRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Pays not exist with id :" + id));
		return ResponseEntity.ok(Pays);
	}
	
	// update Pays rest api
	
	@PutMapping("/Pays/{id}")
	public ResponseEntity<Pays> updatePays(@PathVariable long id, @RequestBody Pays PaysDetails){
		Pays Pays = PaysRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Pays not exist with id :" + id));
		
		//Pays.setId();
		Pays.setCode(PaysDetails.getCode());
		Pays.setLibelle(PaysDetails.getLibelle());
		
		Pays updatedPays = PaysRepository.save(Pays);
		return ResponseEntity.ok(updatedPays);
	}
	
	// delete Pays rest api
	@DeleteMapping("/Pays/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePays(@PathVariable Long id){
		Pays Pays = PaysRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Pays not exist with id :" + id));
		
		PaysRepository.delete(Pays);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	