// screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={['#6A1BFF', '#9C27B0', '#00B8FF']}
        style={styles.gradient}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        {/* Logo */}
        <Text style={styles.logo}>CARAMAK</Text>

        {/* Keke in a box - exactly like design */}
        <View style={styles.kekeBox}>
          <Text style={styles.keke}>🛺</Text>
        </View>

        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>WELCOME</Text>
          <Text style={styles.subtitle}>
            Track it, catch it, ride with ease{'\n'}
            No more waiting, just good journeys
          </Text>
        </View>

        {/* Buttons - matching the design (white + cyan bars) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateAccount')}
          >
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { 
    flex: 1, 
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 50,
    justifyContent: 'space-between'
  },
  logo: { 
    fontSize: 52, 
    fontWeight: 'bold', 
    color: '#fff', 
    letterSpacing: 6,
    marginBottom: 30 
  },
  kekeBox: {
    width: 140,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  keke: { 
    fontSize: 85 
  },
  textContainer: { 
    alignItems: 'center',
    paddingHorizontal: 40 
  },
  welcome: { 
    fontSize: 36, 
    fontWeight: '700', 
    color: '#fff',
    marginBottom: 12 
  },
  subtitle: { 
    fontSize: 16.5, 
    color: '#fff', 
    textAlign: 'center', 
    lineHeight: 26 
  },
  buttonContainer: { 
    width: '100%', 
    paddingHorizontal: 30,
    gap: 12 
  },
  createButton: { 
    backgroundColor: '#fff', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    width: '100%'
  },
  createButtonText: { 
    color: '#6A1BFF', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  loginButton: { 
    backgroundColor: '#00D4FF', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    width: '100%'
  },
  loginButtonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});

export default WelcomeScreen;