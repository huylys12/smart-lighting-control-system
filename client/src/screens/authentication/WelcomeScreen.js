import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function SignUpScreen({navigation}) {
  
    const myImage = require('../../../assets/Nlex.png');

  return (
    <View style={styles.container}>
      
      
      <Image source={myImage} style={styles.img} />
      <Text style={styles.Welcometext}>Welcome to Nlex</Text>
      <Text style={styles.text}>We have an amazing space in our app, Join us and let’s try!</Text>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.signUpButtonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </TouchableOpacity>
     
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Welcometext: {
  paddingLeft: 16,
  width: 293,
  height: 40,
  fontWeight: '700',
  fontSize: 34,
  color: '#1B1B1B',
  marginBottom: 20,
  marginRight: 60,
},
text: {
  width: 293,
  paddingLeft: 16,
  fontWeight: 'normal',
  fontSize: 17,
  color: '#717171',
  marginBottom: 20,
  marginRight: 60,
},
img: {
  left:16,
  width: 130.5,
  height: 33.7,
  marginRight: 220,
  marginBottom: 30,
},
signUpButton: {
  paddingHorizontal: 32,
  paddingVertical: 0,
  width: 343,
  height: 48,
  backgroundColor: '#4B61DD',
  borderWidth: 1,
  borderColor: '#4B61DD',
  borderRadius: 6,
  shadowColor: '#000',
  top: 40,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
  justifyContent: 'center',
  alignItems: 'center',
},
  signUpButtonText: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#F8F8F8',
    
  },
  signInButton: {
    paddingHorizontal: 32,
    paddingVertical: 0,
    width: 343,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4B61DD',
    borderRadius: 6,
    shadowColor: '#000',
    top:40,
    marginTop:20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#4B61DD',
    
  },
  
 
});