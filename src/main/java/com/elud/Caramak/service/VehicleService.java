package com.elud.Caramak.service;

import com.elud.Caramak.model.VehicleDTO;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class VehicleService {

    @Autowired
    private FirebaseDatabase firebaseDatabase;

    public String updateVehicle(VehicleDTO dto) throws Exception {

        String status = dto.getPassengerCount() >= dto.getCapacity()
                ? "FULL" : "AVAILABLE";

        Map<String, Object> data = new HashMap<>();
        data.put("vehicleId", dto.getVehicleId());
        data.put("location", Map.of(
                "lat", dto.getLat(),
                "lng", dto.getLng()
        ));
        data.put("passengerCount", dto.getPassengerCount());
        data.put("capacity", dto.getCapacity());
        data.put("status", status);
        data.put("timestamp", System.currentTimeMillis());

        firebaseDatabase.getReference("vehicles")
                .child(dto.getVehicleId())
                .setValueAsync(data);

        return "Updated vehicle " + dto.getVehicleId() + " in Realtime Database";
    }
}
