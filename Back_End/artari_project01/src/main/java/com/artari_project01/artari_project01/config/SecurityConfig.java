package com.artari_project01.artari_project01.config;


import com.artari_project01.artari_project01.config.jwt.JwtAuthenticationFilter;
import com.artari_project01.artari_project01.config.jwt.JwtAuthorizationFilter;
import com.artari_project01.artari_project01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CorsConfig corsConfig;
    private final UserRepository userRepository;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        JwtAuthenticationFilter authenticationFilter = new JwtAuthenticationFilter(authenticationManager());
        authenticationFilter.setFilterProcessesUrl("/login");

        http.headers().frameOptions().sameOrigin();
        http
//                .addFilter(corsConfig.corsFilter()) // CORS 설정 필터 체인 등록 -> 모든 요청이 이 필터를 가치게 됨으로써 CORS 정책 회피
                .cors().configurationSource(corsConfig.corsConfigurationSource())
                .and()
                .csrf().disable() // 악성 스크립트 공격 방지
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //세션 사용안함
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .addFilter(authenticationFilter)
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), userRepository))
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .antMatchers("/**").permitAll()
                .anyRequest().authenticated();
    }


}
