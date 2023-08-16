package org.tunisair.gestionbillet.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import com.bezkoder.spring.security.login.models.User;
//import com.bezkoder.spring.security.login.repository.UserRepository;
import org.tunisair.gestionbillet.model.*;
import org.tunisair.gestionbillet.repository.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  UserRepository userRepository;

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

    return  (UserDetails) UserDetailsImpl.build(user);
  }

}