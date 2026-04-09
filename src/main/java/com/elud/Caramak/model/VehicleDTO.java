package com.elud.Caramak.model;

import lombok.Data;

@Data
public class VehicleDTO {
    private String vehicleId;
    private double lat;
    private double lng;
    private int passengerCount;
    private int capacity;
}
