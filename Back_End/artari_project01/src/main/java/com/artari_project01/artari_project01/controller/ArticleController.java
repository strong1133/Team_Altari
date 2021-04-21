package com.artari_project01.artari_project01.controller;

import com.artari_project01.artari_project01.domain.Article;
import com.artari_project01.artari_project01.dto.ArticleRequestDto;
import com.artari_project01.artari_project01.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    //게시물 + 페이징
    @GetMapping("/api/article/all")
    public List<Article> responseEntity(@RequestParam int page, Pageable pageable) {
        return articleService.findAllPageArticle(page);
    }

    //게시물 작성
    @PostMapping("/api/article")
    public Article createArticle(Authentication authentication, @RequestBody ArticleRequestDto articleRequestDto) {
        return articleService.createArticle(authentication, articleRequestDto);
    }
}
