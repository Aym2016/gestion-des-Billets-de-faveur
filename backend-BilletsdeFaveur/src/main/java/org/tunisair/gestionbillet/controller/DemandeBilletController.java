package org.tunisair.gestionbillet.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.tunisair.gestionbillet.entity.Compagnie;
import org.tunisair.gestionbillet.entity.DemandeBillet;
import org.tunisair.gestionbillet.entity.Parcours;
import org.tunisair.gestionbillet.entity.Personnel;
import org.tunisair.gestionbillet.entity.TypeBillet;
import org.tunisair.gestionbillet.exception.ResourceNotFoundException;
import org.tunisair.gestionbillet.model.DemandeBilletDTO;
import org.tunisair.gestionbillet.repository.CompagnieRepository;
import org.tunisair.gestionbillet.repository.DemandeBilletRepository;
import org.tunisair.gestionbillet.repository.ParcoursRepository;
import org.tunisair.gestionbillet.repository.PersonnelRepository;
import org.tunisair.gestionbillet.repository.TypeBilletRepository;
import org.tunisair.gestionbillet.repository.DemandeBilletRepository;
import org.tunisair.gestionbillet.repository.DemandeBilletRepository;
import org.tunisair.gestionbillet.repository.DemandeBilletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demandeBillet")
@CrossOrigin(origins = "http://localhost:3000")
public class DemandeBilletController {
	
	private final DemandeBilletRepository DemandeBilletRepository;
	private final ParcoursRepository parcoursRepository;
	private final CompagnieRepository compagnieRepository;
	private final PersonnelRepository personnelRepository;
	private final TypeBilletRepository typebilletRepository;
	
    @Autowired
    public DemandeBilletController(DemandeBilletRepository DemandeBilletRepository, ParcoursRepository parcoursRepository,
    		CompagnieRepository compagnieRepository,PersonnelRepository personnelRepository,TypeBilletRepository typeBilletRepository) {
        this.DemandeBilletRepository = DemandeBilletRepository;
        this.compagnieRepository=compagnieRepository;
        this.parcoursRepository = parcoursRepository;
        this.personnelRepository = personnelRepository;
        this.typebilletRepository=typeBilletRepository;
        
    }
    
    
    @GetMapping("/DemandeBillets")
	public List<DemandeBillet> getAllDemandeBillet(){
		return DemandeBilletRepository.findAll();
	} 
    
    
    @PostMapping("/DemandeBillets")
	public  DemandeBillet createDemandeBillet(@RequestBody DemandeBillet demandeBillet, 
			@RequestBody DemandeBilletDTO e) {
    	

    	Parcours parcours = parcoursRepository.findById(e.getIdParcours())
                .orElseThrow(()-> new IllegalArgumentException("Invalid parcours Id:"));
    	demandeBillet.setParcours(parcours); 
       Compagnie compagnie = compagnieRepository.findById(e.getIdCompagnie())
                .orElseThrow(()-> new IllegalArgumentException("Invalid compagnie Id:" ));
       demandeBillet.setCompagnie(compagnie);
        Personnel personnel = personnelRepository.findById(e.getIdPersonnel())
                .orElseThrow(()-> new IllegalArgumentException("Invalid personnel Id:"));
        demandeBillet.setPersonnel(personnel);
        TypeBillet typeBillet = typebilletRepository.findById(e.getIdTypeBillet())
                .orElseThrow(()-> new IllegalArgumentException("Invalid typeBillet Id:"));
        demandeBillet.setTypeBillet(typeBillet);




    	
    	
    	
		return DemandeBilletRepository.save(demandeBillet);
	} 
    
    @GetMapping("/demandeBillets/{id}")
	public ResponseEntity<DemandeBillet> getdemandeBilletById(@PathVariable long id) {
		DemandeBillet demandeBillet = DemandeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("demandeBillet not exist with id :" + id));
		return ResponseEntity.ok(demandeBillet);
	}
    
    
    
    
    @PutMapping("/demandeBillets/{id}")
    public ResponseEntity<DemandeBillet> updatedemandeBillet(@PathVariable long id, @RequestBody DemandeBillet demandeBilletDetails,
    		DemandeBilletDTO e){
		DemandeBillet demandeBillet = DemandeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("compagnie not exist with id :" + id));
		
		
		Parcours parcours = parcoursRepository.findById(e.getIdParcours())
                .orElseThrow(()-> new IllegalArgumentException("Invalid parcours Id:"));
    	demandeBillet.setParcours(parcours); 
       Compagnie compagnie = compagnieRepository.findById(e.getIdCompagnie())
                .orElseThrow(()-> new IllegalArgumentException("Invalid compagnie Id:" ));
       demandeBillet.setCompagnie(compagnie);
        Personnel personnel = personnelRepository.findById(e.getIdPersonnel())
                .orElseThrow(()-> new IllegalArgumentException("Invalid personnel Id:"));
        demandeBillet.setPersonnel(personnel);
        TypeBillet typeBillet = typebilletRepository.findById(e.getIdTypeBillet())
                .orElseThrow(()-> new IllegalArgumentException("Invalid typeBillet Id:"));
        demandeBillet.setTypeBillet(typeBillet); 
        demandeBillet.setDateAller(demandeBilletDetails.getDateAller());
        demandeBillet.setDateRetour(demandeBilletDetails.getDateRetour()); 
        
        
        
        
		
		//compagnie.setId();
		/*c.setCode(comDetails.getCode());
		compagnie.setLibelle(compagnieDetails.getLibelle());*/
		
		DemandeBillet updatedDemandeBillet = DemandeBilletRepository.save(demandeBilletDetails);
		return ResponseEntity.ok(updatedDemandeBillet);
	
    } 
    
    
    @DeleteMapping("/demandeBillets/{id}")
	public ResponseEntity<Map<String, Boolean>> deletedemandeBillet(@PathVariable Long id){
		DemandeBillet demandeBillet = DemandeBilletRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("demandeBillet not exist with id :" + id));
		
		DemandeBilletRepository.delete(demandeBillet);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 
    
    
    
    
    
    
    
    
}    
    
	/*@Autowired
    private DemandeBilletRepository DemandeBilletRepository;

    @Autowired
    private ProviderRepository providerRepository;*/

  /*  @GetMapping("/list")
    public List<DemandeBillet> getAllDemandeBillets() {
        return (List<DemandeBillet>) DemandeBilletRepository.findAll();
    }

    @PostMapping("/add/{providerId}")
    Optional<Object> createDemandeBillet(@PathVariable (value = "parcoursId") String parcoursId,
    		@PathVariable (value = "typeBilletId") String typeBilletId,
    		@PathVariable (value = "personnelId") String personnelId,
            @Valid @RequestBody DemandeBillet DemandeBillet) 
    
    {
			return parcoursRepository.findById(parcoursId).map(parcours -> {
			DemandeBillet.setParcours(parcours);
			
			return DemandeBilletRepository.save(DemandeBillet);
			});
					//.orElseThrow(() -> new ResourceNotFoundException("ProviderId " + providerId + " not found"))				;
			}*/

    
   /* @PutMapping("/update/{parcoursId}/{DemandeBilletId}/")
    public DemandeBillet updateDemandeBillet(@PathVariable (value = "parcoursId") Long providerId,
                                 @PathVariable (value = "DemandeBilletId") Long DemandeBilletId,
                                 @Valid @RequestBody DemandeBillet DemandeBilletRequest) {
        if(!parcoursRepository.existsById(parcoursId)) {
            throw new ResourceNotFoundException("ProviderId " + providerId + " not found");
        }

        return DemandeBilletRepository.findById(DemandeBilletId).map(DemandeBillet -> {
        	 DemandeBillet.setPrice(DemandeBilletRequest.getPrice());
             DemandeBillet.setLabel(DemandeBilletRequest.getLabel()); 
             DemandeBillet.setLabel(DemandeBilletRequest.getPicture()); 
        return DemandeBilletRepository.save(DemandeBillet);
        }).orElseThrow(() -> new ResourceNotFoundException("DemandeBilletId " + DemandeBilletId + "not found"));
    }*/
    
   /* @DeleteMapping("/delete/{DemandeBilletId}")
    public ResponseEntity<?> deleteDemandeBillet(@PathVariable (value = "DemandeBilletId") Long DemandeBilletId) {
        return DemandeBilletRepository.findById(DemandeBilletId).map(DemandeBillet -> {
            DemandeBilletRepository.delete(DemandeBillet);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("DemandeBillet not found with id " + DemandeBilletId));
    }*/
//}





































/*public class DemandeBilletController {
	@Autowired
	private DemandeBilletRepository DemandeBilletRepository;
	
	@GetMapping("/all")
	public Iterable<DemandeBillet> findAll(){
		return DemandeBilletRepository.findAll();
	}
	
	@PostMapping("/save")
	public DemandeBillet save(@RequestBody DemandeBillet re){
		return  DemandeBilletRepository.save(re); // return id
	}
	
	@PostMapping("/update")
	public void update(@RequestBody DemandeBillet re){
		if(DemandeBilletRepository.findById( re.getOEBF()) != null) {
			DemandeBilletRepository.save(re);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		if(DemandeBilletRepository.findById(id) != null) {
			DemandeBilletRepository.deleteById(id);
		}
	}
}*/
