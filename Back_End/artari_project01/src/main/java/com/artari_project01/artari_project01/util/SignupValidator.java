package com.artari_project01.artari_project01.util;


import java.util.regex.Pattern;

public class SignupValidator {

    //Id
    public static boolean idValid(String username){
        return Pattern.matches( "^[A-za-z0-9]{4,10}", username);
    }

    //PW
    public static boolean pwValid(String id, String pw) {
        if (pw.contains(id)) {
            return false;
        }
        return Pattern.matches("^[A-Za-z0-9]{5,20}$", pw);
    }
}
