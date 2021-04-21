package com.artari_project01.artari_project01.domain;

import com.artari_project01.artari_project01.dto.ArticleSaveDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class Article extends Timestamped{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private String author;

    public Article(ArticleSaveDto articleSaveDto){
        this.title = articleSaveDto.getTitle();
        this.contents = articleSaveDto.getContents();
        this.author = articleSaveDto.getAuthor();
    }
}
