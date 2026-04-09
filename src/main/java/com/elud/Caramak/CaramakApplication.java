package com.elud.Caramak;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.io.InputStream;

@SpringBootApplication
public class CaramakApplication {
	public static void main(String[] args) {
		SpringApplication.run(CaramakApplication.class, args);
	}

}
