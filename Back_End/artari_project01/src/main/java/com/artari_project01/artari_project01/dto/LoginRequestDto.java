package com.artari_project01.artari_project01.dto;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
// 로그인을 위한 DTO
public class LoginRequestDto {
    private String username;
    private String password;
}
