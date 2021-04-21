package com.artari_project01.artari_project01.service;

import com.artari_project01.artari_project01.config.auth.PrincipalDetails;
import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    //전체 유저 조회
    @Transactional
    public List<User> findAllUser(int page) {
        Page<User> pageUsers = userRepository.findAll(PageRequest.of(page-1, 6, Sort.Direction.DESC, "modifiedAt"));
        List<User> users = pageUsers.getContent();
        return users;
    }

    // 현재 로그인한 유저 정보
    @Transactional
    public Optional<User> findCurUser(Authentication authentication){
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        Long userId = principalDetails.getUser().getId();
        return userRepository.findById(userId);
    }
}


