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
import org.tunisair.gestionbillet.entity.Motif;
//import org.tunisair.gestionbillet.entity.motif;
import org.tunisair.gestionbillet.repository.MotifRepository;
//import org.tunisair.gestionbillet.repository.motifRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class MotifController {
	@Autowired
	private MotifRepository motifRepository;
	
	// get all motifs
	@GetMapping("/motifs")
	public List<Motif> getAllmotifs(){
		return motifRepository.findAll();
	}		
	
	// create motif rest api
	@PostMapping("/motifs")
	public Motif createmotif(@RequestBody Motif motif) {
		return motifRepository.save(motif);
	}
	
	// get motif by id rest api
	@GetMapping("/motifs/{id}")
	public ResponseEntity<Motif> getmotifById(@PathVariable long id) {
		Motif motif = motifRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("motif not exist with id :" + id));
		return ResponseEntity.ok(motif);
	}
	
	// update motif rest api
	
	@PutMapping("/motifs/{id}")
	public ResponseEntity<Motif> updatemotif(@PathVariable long id, @RequestBody Motif motifDetails){
		Motif motif = motifRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("motif not exist with id :" + id));
		
		//motif.setId();
		motif.setCode(motifDetails.getCode());
		motif.setLibelle(motifDetails.getLibelle());
		
		Motif updatedmotif = motifRepository.save(motif);
		return ResponseEntity.ok(updatedmotif);
	}
	
	// delete motif rest api
	@DeleteMapping("/motifs/{id}")
	public ResponseEntity<Map<String, Boolean>> deletemotif(@PathVariable Long id){
		Motif motif = motifRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("motif not exist with id :" + id));
		
		motifRepository.delete(motif);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	