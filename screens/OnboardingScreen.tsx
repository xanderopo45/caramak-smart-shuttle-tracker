// screens/OnboardingScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={['#6A1BFF', '#00B8FF']}
        style={styles.gradient}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {/* Keke Illustration */}
        <View style={styles.kekeBox}>
          <Text style={styles.keke}>🛺</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Real-time Tracking</Text>
          <Text style={styles.subtitle}>
            See live location of buses and keke{'\n'}
            Know if it's full or has space
          </Text>
        </View>

        <View style={styles.dots}>
          <View style={[styles.dot, { backgroundColor: '#fff' }]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 30 
  },
  backButton: { 
    position: 'absolute', 
    top: 60, 
    left: 30 
  },
  backText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '500' 
  },
  kekeBox: {
    width: 160,
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  keke: { fontSize: 90 },
  textContainer: { alignItems: 'center', marginBottom: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  subtitle: { fontSize: 16.5, color: '#fff', textAlign: 'center', lineHeight: 26 },
  dots: { flexDirection: 'row', gap: 10, marginBottom: 60 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.5)' },
  getStartedButton: { 
    backgroundColor: '#fff', 
    paddingVertical: 18, 
    paddingHorizontal: 80, 
    borderRadius: 30 
  },
  getStartedText: { 
    color: '#6A1BFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default OnboardingScreen;