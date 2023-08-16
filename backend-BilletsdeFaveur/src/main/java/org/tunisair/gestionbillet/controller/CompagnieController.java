package org.tunisair.gestionbillet.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

//import org.emsi.gestionhotel.entity.Reservation;
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

import org.tunisair.gestionbillet.entity.Compagnie;
import org.tunisair.gestionbillet.repository.CompagnieRepository;

import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
//import net.javaguides.springboot.model.Employee;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

//import com.bezkoder.integrate.spring.react.model.Tutorial;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class CompagnieController {
	@Autowired
	private CompagnieRepository compagnieRepository;
	
	// get all compagnies
	@GetMapping("/compagnies")
	public List<Compagnie> getAllcompagnies(){
		return compagnieRepository.findAll();
	}		
	
	// create compagnie rest api
	@PostMapping("/compagnies")
	public Compagnie createcompagnie(@RequestBody Compagnie compagnie) {
		return compagnieRepository.save(compagnie);
	}
	
	// get compagnie by id rest api
	@GetMapping("/compagnies/{id}")
	public ResponseEntity<Compagnie> getcompagnieById(@PathVariable long id) {
		Compagnie compagnie = compagnieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("compagnie not exist with id :" + id));
		return ResponseEntity.ok(compagnie);
	}
	
	// update compagnie rest api
	
	@PutMapping("/compagnies/{id}")
	public ResponseEntity<Compagnie> updatecompagnie(@PathVariable long id, @RequestBody Compagnie compagnieDetails){
	Compagnie	 compagnie = compagnieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("compagnie not exist with id :" + id));
		
		//compagnie.setCode();
		
		compagnie.setCode(compagnieDetails.getCode());
		compagnie.setLibelle(compagnieDetails.getLibelle());
		
		Compagnie updatedcompagnie = compagnieRepository.save(compagnieDetails);
		return ResponseEntity.ok(updatedcompagnie);
	}
	/*@PostMapping("compagnies/update")
	public void update(@RequestBody Compagnie e){
		if(compagnieRepository.findById(e.getId()) != null) {
			compagnieRepository.save(e);
		}
	}*/
	
	// delete compagnie rest api
	@DeleteMapping("/compagnies/{id}")
	public ResponseEntity<Map<String, Boolean>> deletecompagnie(@PathVariable Long id){
		Compagnie compagnie = compagnieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("compagnie not exist with id :" + id));
		
		compagnieRepository.delete(compagnie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*@Autowired
	private CompagnieRepository compagnieRepository;
	
	@GetMapping("/compagnie")
	public Iterable<Compagnie> findAll(){
		return compagnieRepository.findAll();
	}
	
	@PostMapping("/save")
	public Compagnie save(@RequestBody Compagnie re){
		return  compagnieRepository.save(re); // return id
	}
	
	@PostMapping("/update")
	public void update(@RequestBody Compagnie re){
		if(compagnieRepository.findById( re.getId()) != null) {
			compagnieRepository.save(re);
		}
	}
	
	@PutMapping("compagnie/{id}")
	public ResponseEntity<Compagnie> updateCompagnie(@PathVariable String id, @RequestBody Compagnie compagnieDetails){
		Compagnie compagnie = compagnieRepository.findById(Long.parseLong(id))
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		compagnie.setId(compagnieDetails.getId());
		compagnie.setCode(compagnieDetails.getCode());
		compagnie.setLibelle(compagnieDetails.getLibelle());
		
		Compagnie updatedCompagnie = compagnieRepository.save(compagnie);
		return ResponseEntity.ok(updatedCompagnie);
	}
	
	
	
	
	/*@GetMapping("/{id}")
	public Compagnie getTutorialById(@PathVariable("id") long id) {
		Compagnie tutorialData =compagnieRepository.findById(id);

		if (tutorialData!=null) {
			//return new ResponseEntity<>(tutorialData, HttpStatus.OK);
			return compagnieRepository.findById(id);
		} else {
			return null;
		}
	}*/ 
	/*@GetMapping("/{id}")
	public ResponseEntity<Compagnie> getTutorialById(@PathVariable("id") long id) {
		Optional<Compagnie> tutorialData = compagnieRepository.findById(id);

		if (tutorialData.isPresent()) {
			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}					
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		if(compagnieRepository.findById(id) != null) {
			compagnieRepository.deleteById(id);
		}
	}
}*/
	
