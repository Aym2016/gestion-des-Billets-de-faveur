package org.tunisair.gestionbillet.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.tunisair.gestionbillet.entity.Responsable;
import org.tunisair.gestionbillet.entity.Utilisateur;
//import org.tunisair.gestionbillet.model.RegisterForm;
import org.tunisair.gestionbillet.repository.ClientRepository;
import org.tunisair.gestionbillet.repository.UtilisateurRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
	@Autowired
	private ClientRepository clientRepository;
	
	/*
	@PostMapping("/signUp")
	public long register(@RequestBody Responsable client) {
	    if(client == null || clientRepository.findByUsername(client.getUsername()) != null) return -1;
		else {
			return clientRepository.save(client).getId();
		}
	}
	@PostMapping("/signIn")
	public Responsable login(@RequestBody Responsable client) {
		if(clientRepository.findByUsername(client.getUsername()) == null) return null;
		else if(!clientRepository.findByUsername(client.getUsername()).getPassword().equals(client.getPassword()))
			return null;
		else
			return clientRepository.findByUsername(client.getUsername());
	}*/
	
	/*public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}*/
	
	
	//@PostMapping("/signIn")

	@PostMapping("/update")
	public void update(@RequestBody Responsable client){
		if(clientRepository.findById(client.getId()) != null) {
			clientRepository.save(client);
		}
		
	}
}
