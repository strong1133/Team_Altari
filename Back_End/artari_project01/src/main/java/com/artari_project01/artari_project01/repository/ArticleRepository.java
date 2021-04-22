package com.artari_project01.artari_project01.repository;

import com.artari_project01.artari_project01.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
