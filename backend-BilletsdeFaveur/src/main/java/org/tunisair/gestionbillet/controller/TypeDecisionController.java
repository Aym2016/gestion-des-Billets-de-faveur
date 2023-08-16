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

import org.tunisair.gestionbillet.entity.TypeDecision;
import org.tunisair.gestionbillet.repository.TypeDecisionRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class TypeDecisionController {
	@Autowired
	private TypeDecisionRepository TypeDecisionRepository;
	
	// get all Payss
	@GetMapping("/TypeDecisions")
	public List<TypeDecision> getAllTypeDecsions(){
		return TypeDecisionRepository.findAll();
	}		
	
	// create Pays rest api
	@PostMapping("/Payss")
	public TypeDecision createTypeDecision(@RequestBody TypeDecision TypeDecision) {
		return TypeDecisionRepository.save(TypeDecision);
	}
	
	// get TypeDecision by id rest api
	@GetMapping("/TypeDecisions/{id}")
	public ResponseEntity<TypeDecision> getTypeDecisionById(@PathVariable long id) {
		TypeDecision TypeDecision = TypeDecisionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeDecision not exist with id :" + id));
		return ResponseEntity.ok(TypeDecision);
	}
	
	// update TypeDecision rest api
	
	@PutMapping("/TypeDecisions/{id}")
	public ResponseEntity<TypeDecision> updateTypeDecision(@PathVariable long id, @RequestBody TypeDecision TypeDecisionDetails){
		TypeDecision TypeDecision = TypeDecisionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeDecision not exist with id :" + id));
		
		//TypeDecision.setId();
		TypeDecision.setCode(TypeDecisionDetails.getCode());
		TypeDecision.setLibelle(TypeDecisionDetails.getLibelle());
		
		TypeDecision updatedTypeDecision = TypeDecisionRepository.save(TypeDecision);
		return ResponseEntity.ok(updatedTypeDecision);
	}
	
	// delete TypeDecision rest api
	@DeleteMapping("/TypeDecisions/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTypeDecision(@PathVariable Long id){
		TypeDecision TypeDecision = TypeDecisionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeDecision not exist with id :" + id));
		
		TypeDecisionRepository.delete(TypeDecision);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	