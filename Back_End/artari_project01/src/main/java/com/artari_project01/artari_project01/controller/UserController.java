package com.artari_project01.artari_project01.controller;

import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    //현재 로그인한 유저 정보
    @GetMapping("/api/user/cur_user")
    public Optional<User> findCurUser(Authentication authentication){
        return userService.findCurUser(authentication);
    }

    //회원 전체 조회
    @GetMapping("/api/user/all")
    public List<User> findAllUser(@RequestParam int page) {
        return userService.findAllUser(page);
    }

}
