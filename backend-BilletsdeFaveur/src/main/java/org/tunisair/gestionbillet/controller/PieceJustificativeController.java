package org.tunisair.gestionbillet.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.tunisair.gestionbillet.entity.Personnel;
import org.tunisair.gestionbillet.entity.PieceJustificative;
import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
import org.tunisair.gestionbillet.repository.PersonnelRepository;
import org.tunisair.gestionbillet.repository.PieceJustificativeRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PieceJustificativeController {
	@Autowired
	private PieceJustificativeRepository pieceJustificativeRepository;
	@Autowired
	private PersonnelRepository personnelRepository;
	
	public PieceJustificativeController(PieceJustificativeRepository pieceJustificativeRepository,
			PersonnelRepository personnelRepository) {
		super();
		this.pieceJustificativeRepository = pieceJustificativeRepository;
		this.personnelRepository = personnelRepository;
	}

	// get all pieceJustificatives
	@GetMapping("/PieceJustificatives")
	public List<PieceJustificative> getAllPieceJustificatives(){
		return pieceJustificativeRepository.findAll();
	}		
	
	// create pieceJustificative rest api
	@PostMapping("/PieceJustificatives")
	public PieceJustificative createPieceJustificative(@RequestBody PieceJustificative pieceJustificative
			)//, @RequestParam(name = "personnelId", required = false) Long p) 
			{
		/*Personnel personnel = personnelRepository.findById(p)
                .orElseThrow(()-> new IllegalArgumentException("Invalid Personnel Id:" + p));*/	
		
		//pieceJustificative.setPersonnel(personnel);
		return pieceJustificativeRepository.save(pieceJustificative);
	}
	
	// get pieceJustificative by id rest api
	@GetMapping("/PieceJustificatives/{id}")
	public ResponseEntity<PieceJustificative> getPieceJustificativeById(@PathVariable long id) {
		PieceJustificative pieceJustificative = pieceJustificativeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("pieceJustificative not exist with id :" + id));
		
		
		
		return ResponseEntity.ok(pieceJustificative);
	}
	
	// update pieceJustificative rest api
	
	@PutMapping("/PieceJustificatives/{id}")
	public ResponseEntity<PieceJustificative> updatePieceJustificative(@PathVariable long id,
			@RequestBody PieceJustificative pieceJustificativeDetails)
		//	,@RequestParam(name = "personnelId", required = false) Long p)
	{
		
		Personnel personnel = personnelRepository.findById(pieceJustificativeDetails.getPersonnel().getMatricule())
                .orElseThrow(()-> new IllegalArgumentException("Invalid Personnel Id:" ));
    	
		PieceJustificative pieceJustificative = pieceJustificativeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("pieceJustificative not exist with id :" + id));
		
		//pieceJustificative.setPersonnel(personnel);
		//pieceJustificative.setId();
		pieceJustificative.setCodePiece(pieceJustificativeDetails.getCode());
		pieceJustificative.setLibelle(pieceJustificativeDetails.getLibelle());
		
		PieceJustificative updatedpieceJustificative = pieceJustificativeRepository.save(pieceJustificative);
		return ResponseEntity.ok(updatedpieceJustificative);
	}
	
	// delete pieceJustificative rest api
	@DeleteMapping("/PieceJustificatives/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePieceJustificative(@PathVariable Long id){
		PieceJustificative pieceJustificative = pieceJustificativeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("pieceJustificative not exist with id :" + id));
		
		pieceJustificativeRepository.delete(pieceJustificative);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*	@Autowired
	private PieceJustificativeRepository PieceJustificativeRepository;
	
	@GetMapping("/all")
	public Iterable<PieceJustificative> findAll(){
		return PieceJustificativeRepository.findAll();
	}
	
	@PostMapping("/save")
	public PieceJustificative save(@RequestBody PieceJustificative re){
		return  PieceJustificativeRepository.save(re); // return id
	}
	
	@PostMapping("/update")
	public void update(@RequestBody PieceJustificative re){
		if(PieceJustificativeRepository.findById( re.getCodePiece()) != null) {
			PieceJustificativeRepository.save(re);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		if(PieceJustificativeRepository.findById(id) != null) {
			PieceJustificativeRepository.deleteById(id);
		}
	}*/ 
	
	
	
	

