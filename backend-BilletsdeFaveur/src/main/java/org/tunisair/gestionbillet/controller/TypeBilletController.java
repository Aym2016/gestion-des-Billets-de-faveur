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
import org.tunisair.gestionbillet.entity.TypeBillet;
//import org.tunisair.gestionbillet.entity.typeBillet;
import org.tunisair.gestionbillet.repository.TypeBilletRepository;
//import org.tunisair.gestionbillet.repository.typeBilletRepository;
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

import org.tunisair.gestionbillet.entity.TypeBillet;
import org.tunisair.gestionbillet.repository.TypeBilletRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class TypeBilletController {
	@Autowired
	private TypeBilletRepository TypeBilletRepository;
	
	// get all TypeBillets
	@GetMapping("/TypeBillets")
	public List<TypeBillet> getAllTypeBillets(){
		return TypeBilletRepository.findAll();
	}		
	
	// create TypeBillet rest api
	@PostMapping("/TypeBillets")
	public TypeBillet createTypeBillet(@RequestBody TypeBillet TypeBillet) {
		return TypeBilletRepository.save(TypeBillet);
	}
	
	// get TypeBillet by id rest api
	@GetMapping("/TypeBillets/{id}")
	public ResponseEntity<TypeBillet> getTypeBilletById(@PathVariable long id) {
		TypeBillet TypeBillet = TypeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeBillet not exist with id :" + id));
		return ResponseEntity.ok(TypeBillet);
	}
	
	// update TypeBillet rest api
	
	@PutMapping("/TypeBillets/{id}")
	public ResponseEntity<TypeBillet> updateTypeBillet(@PathVariable long id, @RequestBody TypeBillet TypeBilletDetails){
		TypeBillet TypeBillet = TypeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeBillet not exist with id :" + id));
		
		//TypeBillet.setId();
		TypeBillet.setCode(TypeBilletDetails.getCode());
		TypeBillet.setLibelle(TypeBilletDetails.getLibelle());
		
		TypeBillet updatedTypeBillet = TypeBilletRepository.save(TypeBillet);
		return ResponseEntity.ok(updatedTypeBillet);
	}
	
	// delete TypeBillet rest api
	@DeleteMapping("/TypeBillets/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTypeBillet(@PathVariable Long id){
		TypeBillet TypeBillet = TypeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("TypeBillet not exist with id :" + id));
		
		TypeBilletRepository.delete(TypeBillet);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	
/*	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		if(compagnieRepository.findById(id) != null) {
			compagnieRepository.deleteById(id);
		}
	}*/
	
	
	//@DeleteMapping("/delete/{id}")
	/*public void delete(@PathVariable (required = true) long id){
		if(typeBilletRepository.findById(id) != null) {
			typeBilletRepository.delete(TypeBilletRepository.findById(id));
		}
	}*/
