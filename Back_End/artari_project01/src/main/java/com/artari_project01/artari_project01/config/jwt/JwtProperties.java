package com.artari_project01.artari_project01.config.jwt;

public interface JwtProperties {
    String SECRET = "Altari";
    int EXPIRATION_TIME = 12340000;
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}
