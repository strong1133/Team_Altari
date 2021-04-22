package com.artari_project01.artari_project01.controller;

import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.dto.SignupRequestDto;
import com.artari_project01.artari_project01.service.SignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@RestController
public class SignupController {

    private final SignupService signupService;

    @PostMapping("/api/signup")
    public Map<String, String> signupUser(@RequestBody SignupRequestDto signupRequestDto){
        return signupService.signupUser(signupRequestDto);
    }
}
