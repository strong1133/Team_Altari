package com.artari_project01.artari_project01.repository;

import com.artari_project01.artari_project01.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SignupRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
