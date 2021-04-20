package com.artari_project01.artari_project01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController {

    @GetMapping("/api/hello")
    public String getHello(){
        return "안녕안뇽";
    }
}
