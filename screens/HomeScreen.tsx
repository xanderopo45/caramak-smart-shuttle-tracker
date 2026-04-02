// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [userName] = useState("Alex");

  // Simulated vehicle positions
  const [vehicles, setVehicles] = useState([
    { id: 32, type: "Keke", latitude: 9.0765, longitude: 7.3986, icon: "🛺" },
    { id: 39, type: "Keke", latitude: 9.0800, longitude: 7.4100, icon: "🛺" },
    { id: 12, type: "Bus",  latitude: 9.0650, longitude: 7.3850, icon: "🚌" },
  ]);

  // Simulate live movement
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev => prev.map(vehicle => ({
        ...vehicle,
        latitude: vehicle.latitude + (Math.random() - 0.5) * 0.002,
        longitude: vehicle.longitude + (Math.random() - 0.5) * 0.002,
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBookRide = (rideId: number, type: string) => {
    Alert.alert(
      "Ride Booked Successfully! ✅", 
      `You have booked ${type} #${rideId}.\n\nThe driver has been notified and is on the way.`,
      [{ text: "OK" }]
    );
  };

  const rides = [
    { id: 32, seats: "4 seats available", type: "Keke", icon: "🛺" },
    { id: 39, seats: "2 seats available", type: "Keke", icon: "🛺" },
    { id: 12, seats: "1 seat available",  type: "Bus",  icon: "🚌" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {userName}!</Text>
        <View style={styles.locationBadge}>
          <Text style={styles.locationText}>📍 Abuja</Text>
        </View>
      </View>

      {/* Live Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 9.0765,
            longitude: 7.3986,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}
          showsUserLocation={true}
        >
          {vehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              coordinate={{
                latitude: vehicle.latitude,
                longitude: vehicle.longitude,
              }}
              title={`#${vehicle.id} ${vehicle.type}`}
              description="Moving • Tap for details"
            />
          ))}
        </MapView>

        {/* Live Status Overlay */}
        <View style={styles.liveOverlay}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE • 3 vehicles tracking in Abuja</Text>
        </View>
      </View>

      {/* Available Rides */}
      <View style={styles.rideSection}>
        <Text style={styles.sectionTitle}>Available Rides Nearby</Text>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rideList}
        >
          {rides.map((ride, index) => (
            <View key={index} style={styles.rideCard}>
              <Text style={styles.vehicleIcon}>{ride.icon}</Text>
              <Text style={styles.rideNumber}>#{ride.id}</Text>
              <Text style={styles.vehicleType}>{ride.type}</Text>
              <Text style={styles.seatsText}>{ride.seats}</Text>
              
              <TouchableOpacity 
                style={styles.bookButton}
                onPress={() => handleBookRide(ride.id, ride.type)}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    backgroundColor: '#4A00E0',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  locationBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  locationText: { color: '#fff', fontSize: 14, fontWeight: '500' },

  mapContainer: { height: 280, position: 'relative' },
  map: { flex: 1 },

  liveOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 10,
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginRight: 8,
  },
  liveText: { color: '#fff', fontSize: 13, fontWeight: '500' },

  rideSection: { padding: 20, flex: 1 },
  sectionTitle: { fontSize: 19, fontWeight: 'bold', color: '#333', marginBottom: 18 },
  rideList: { paddingBottom: 30 },
  rideCard: {
    backgroundColor: '#fff',
    width: width * 0.42,
    marginRight: 16,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
  },
  vehicleIcon: { fontSize: 48, marginBottom: 12 },
  rideNumber: { fontSize: 26, fontWeight: 'bold', color: '#4A00E0', marginBottom: 4 },
  vehicleType: { fontSize: 15, fontWeight: '600', color: '#555', marginBottom: 8 },
  seatsText: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 16 },
  bookButton: {
    backgroundColor: '#4A00E0',
    paddingVertical: 13,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  bookButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});

export default HomeScreen;