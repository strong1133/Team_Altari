package com.artari_project01.artari_project01.domain;

import com.artari_project01.artari_project01.dto.SignupRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;


    public User(SignupRequestDto signupRequestDto){
        this.username = signupRequestDto.getUsername();
        this.password = signupRequestDto.getPassword();
    }
}
