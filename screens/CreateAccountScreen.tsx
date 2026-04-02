// screens/CreateAccountScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreateAccountScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'Continue', onPress: () => navigation.navigate('Onboarding') }
    ]);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      <LinearGradient 
        colors={['#6A1BFF', '#9C27B0', '#00B8FF']} 
        style={styles.gradient}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>CREATE ACCOUNT</Text>
          <Text style={styles.subtitle}>Start your journey with Caramak</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.createBtn} onPress={handleCreateAccount}>
            <Text style={styles.createBtnText}>Create Account</Text>
          </TouchableOpacity>

          {/* Social Login */}
          <Text style={styles.orText}>Or continue with</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { 
    flex: 1, 
    paddingHorizontal: 30, 
    paddingTop: 50 
  },
  backButton: { 
    alignSelf: 'flex-start', 
    marginBottom: 30 
  },
  backText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '500' 
  },

  header: { 
    alignItems: 'center', 
    marginBottom: 50 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#eee', 
    marginTop: 8, 
    textAlign: 'center' 
  },

  form: { 
    flex: 1, 
    gap: 16 
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    fontSize: 16,
    color: '#333',
    borderWidth: 0,
  },
  createBtn: {
    backgroundColor: '#00D4FF',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  createBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 25,
    fontSize: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialBtn: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialText: {
    fontWeight: '600',
    color: '#333',
    fontSize: 16,
  },
});

export default CreateAccountScreen;