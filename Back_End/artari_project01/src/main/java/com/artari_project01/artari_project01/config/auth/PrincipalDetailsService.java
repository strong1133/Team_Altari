package com.artari_project01.artari_project01.config.auth;

import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username){
        System.out.println("PrincipalDetailsService : 진입");
        User user = userRepository.findByUsername(username);
        return new PrincipalDetails(user);
    }
}
