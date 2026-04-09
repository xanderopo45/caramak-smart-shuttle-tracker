package com.elud.Caramak.controller;

import com.elud.Caramak.model.VehicleDTO;
import com.elud.Caramak.service.VehicleService;
import com.google.firebase.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService service;

    @Autowired
    private FirebaseDatabase firebaseDatabase;

    @PostMapping("/update")
    public String update(@RequestBody VehicleDTO dto) throws Exception {
        return service.updateVehicle(dto);
    }

    @GetMapping
    public Map<String, Object> getVehicles() throws Exception {
        DatabaseReference ref = firebaseDatabase.getReference("vehicles");

        CompletableFuture<Map<String, Object>> future = new CompletableFuture<>();

        ref.addListenerForSingleValueEvent(new ValueEventListener() {
//            @Override
//            public void onDataChange(DataSnapshot snapshot) {
//                // Firebase returns data as a Map or List; this cast works for a collection of vehicles
//                future.complete((Map<String, Object>) snapshot.getValue());
//            }

            @Override
            public void onDataChange(DataSnapshot snapshot) {
                Object value = snapshot.getValue();
                if (value instanceof Map) {
                    future.complete((Map<String, Object>) value);
                } else {
                    future.complete(new HashMap<>());
                }
            }

            @Override
            public void onCancelled(DatabaseError error) {
                future.completeExceptionally(error.toException());
            }
        });

        return future.get();
    }
}
