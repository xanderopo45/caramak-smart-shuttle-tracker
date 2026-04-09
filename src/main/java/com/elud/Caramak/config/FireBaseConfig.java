package com.elud.Caramak.config;

import com.elud.Caramak.CaramakApplication;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FireBaseConfig {

    @Bean
    public FirebaseDatabase firebaseDatabase() throws IOException {

        if (FirebaseApp.getApps().isEmpty()) {
            InputStream serviceAccount = CaramakApplication.class
                    .getClassLoader()
                    .getResourceAsStream("CaramakServiceAccountKey.json");

            if (serviceAccount == null) {
                throw new RuntimeException("Could not find CaramakServiceAccountKey.json in src/main/resources");
            }

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://caramak-d8514-default-rtdb.europe-west1.firebasedatabase.app/")
                    .build();

            FirebaseApp.initializeApp(options);
        }

        return FirebaseDatabase.getInstance();
    }
}
