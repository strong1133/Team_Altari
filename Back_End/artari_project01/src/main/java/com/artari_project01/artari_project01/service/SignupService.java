package com.artari_project01.artari_project01.service;

import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.dto.SignupRequestDto;
import com.artari_project01.artari_project01.repository.SignupRepository;
import com.artari_project01.artari_project01.util.SignupValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SignupService {
    private final PasswordEncoder passwordEncoder;
    private final SignupRepository signupRepository;
    private static final String SCERET_KEY = "AWDSDV+/asdwzwr3434@#$vvadflf00ood/[das";

    public Map<String, String> signupUser(SignupRequestDto signupRequestDto) {
        String username = signupRequestDto.getUsername();
        // Id 정규식 검사
        if (!SignupValidator.idValid(username)) {
            throw new IllegalArgumentException("아이디 형식이 올바르지 않습니다");
        }
        // Id 중복 검사
        Optional<User> findUsername = signupRepository.findByUsername(username);
        if (findUsername.isPresent())//findUsername가 있으면 중복이라는 얘기!
        {
            throw new IllegalArgumentException("이미 존재하는 아이디 입니다!");
        }

        String lawPassword = signupRequestDto.getPassword(); // 암호화 전의 password

        //password 정규식 검사 -> username이 pwd에 포함되어 있는지 확인하기 위해 같이 넘겨줌
        if (!SignupValidator.pwValid(username,lawPassword)) {
            throw new IllegalArgumentException("비밀번호 형식이 올바르지 않습니다!");
        }
        //정규식 통과한 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(lawPassword);


        // 위의 모든 과정을 통과하면 회원가입 완료를 위해 DB 저장
        signupRequestDto.setUsername(username);
        signupRequestDto.setPassword(encodedPassword);
        User user = new User(signupRequestDto);
        signupRepository.save(user);

        Map<String, String> map = new HashMap<>();
        map.put("Success", "회원가입이 완료되었습니다.");
        return map;
    }

}
