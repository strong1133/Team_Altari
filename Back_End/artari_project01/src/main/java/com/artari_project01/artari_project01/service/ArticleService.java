package com.artari_project01.artari_project01.service;

import com.artari_project01.artari_project01.config.auth.PrincipalDetails;
import com.artari_project01.artari_project01.domain.Article;
import com.artari_project01.artari_project01.domain.User;
import com.artari_project01.artari_project01.dto.ArticleRequestDto;
import com.artari_project01.artari_project01.dto.ArticleSaveDto;
import com.artari_project01.artari_project01.repository.ArticleRepository;
import com.artari_project01.artari_project01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public List<Article> findAllPageArticle(int page){
        Page<Article> articlePage = articleRepository.findAll(PageRequest.of(page-1, 5, Sort.Direction.DESC, "modifiedAt"));
        List<Article> articles =  articlePage.getContent();
        return articles;
    }

    //게시물 작성
    @Transactional
    public Article createArticle(Authentication authentication, ArticleRequestDto articleRequestDto) {
        // 헤더에서 넘겨받은 토큰을 이용해 로그인한 유저정보를 찾는다.
        PrincipalDetails principalDetails = null;
        try {
            principalDetails = (PrincipalDetails) authentication.getPrincipal();
        } catch (Exception e) {
            throw new NullPointerException("토큰 정보가 없습니다");
        }

        // 그 중에서도 primary Key인 id값
        Long user_id = principalDetails.getUser().getId();
        System.out.println("id:" + user_id); // 잘 뽑아졌는지 확인용
        // id값을 이용해 user 객체를 찾아준다.
        User user = userRepository.findById(user_id).orElseThrow(
                () -> new IllegalArgumentException("No") // 에러 대비
        );

        // 최종적으로 save에 이용할 DTO인 articleRequestDto에 값들을 셋팅해줌.
        String title = articleRequestDto.getTitle();
        String contents = articleRequestDto.getContents();
        String author = user.getUsername();

        ArticleSaveDto articleSaveDto= new ArticleSaveDto();
        articleSaveDto.setTitle(title);
        articleSaveDto.setContents(contents);
        articleSaveDto.setAuthor(author);
        Article article = new Article(articleSaveDto);
        return articleRepository.save(article);
    }


}
