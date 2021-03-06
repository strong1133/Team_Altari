package com.artari_project01.artari_project01.repository;

import com.artari_project01.artari_project01.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
