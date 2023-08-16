package org.tunisair.gestionbillet.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.tunisair.gestionbillet.entity.Personnel;
import org.tunisair.gestionbillet.repository.PersonnelRepository;
import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonnelController {
	@Autowired
	private PersonnelRepository personnelRepository;
	
	// get all personnels
	@GetMapping("/personnels")
	public List<Personnel> getAllpersonnels(){
		return personnelRepository.findAll();
	}		
	
	// create personnel rest api
	@PostMapping("/personnels")
	public ResponseEntity<Personnel> createpersonnel(@RequestBody Personnel personnel) {
		 //createdStudent = service.create(student);
		 personnelRepository.save(personnel);
		return ResponseEntity.ok(personnel);
	}
	
	// get personnel by id rest api
	@GetMapping("/personnels/{id}")
	public ResponseEntity<Personnel> getpersonnelById(@PathVariable long id) {
		Personnel personnel = personnelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("personnel not exist with id :" + id));
		return ResponseEntity.ok(personnel);
	}
	
	// update personnel rest api
	
	@PutMapping("/personnels/{id}")
	public ResponseEntity<Personnel> updatepersonnel(@PathVariable long id, @RequestBody Personnel personnelDetails){
		Personnel personnel = personnelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("personnel not exist with id :" + id));
		
		//personnel.setId();
		/*personnel.setCode(personnelDetails.get());
		personnel.setLibelle(personnelDetails.getLibelle());*/
		
		Personnel updatedpersonnel = personnelRepository.save(personnel);
		return ResponseEntity.ok(updatedpersonnel);
	}
	
	// delete personnel rest api
	@DeleteMapping("/personnels/{id}")
	public ResponseEntity<Map<String, Boolean>> deletepersonnel(@PathVariable Long id){
		Personnel personnel = personnelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("personnel not exist with id :" + id));
		
		personnelRepository.delete(personnel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}








/*
@RestController
@RequestMapping("/personnel")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonnelController {
	@Autowired
	private PersonnelRepository PersonnelRepository;
	
	@GetMapping("/all")
	public Iterable<Personnel> findAll(){
		return PersonnelRepository.findAll();
	}
	
	@PostMapping("/save")
	public Personnel save(@RequestBody Personnel re){
		return  PersonnelRepository.save(re); // return id
	}
	
	@PostMapping("/update")
	public void update(@RequestBody Personnel re){
		if(PersonnelRepository.findById( re.getMatricule()) != null) {
			PersonnelRepository.save(re);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		if(PersonnelRepository.findById(id) != null) {
			PersonnelRepository.deleteById(id);
		}
	}
}*/
