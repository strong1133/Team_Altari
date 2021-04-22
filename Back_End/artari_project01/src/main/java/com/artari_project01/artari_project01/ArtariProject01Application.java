package com.artari_project01.artari_project01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ArtariProject01Application {

    public static void main(String[] args) {
        SpringApplication.run(ArtariProject01Application.class, args);
    }

}
