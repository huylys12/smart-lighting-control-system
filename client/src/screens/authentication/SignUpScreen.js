import { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../api/api.js';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AuthContext } from '../../context/AuthContext.js';

export default function SignUpScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleUsernameChange = (value) => {
    setUsername(value);
  
    // Check if the entered username is a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
  
    // Update state to indicate whether email is valid
    setIsEmailValid(isValidEmail);
  };
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (value) => {
    setPassword(value);
  
    // Check if the entered password is at least 8 characters long
    const isValidPassword = value.length >= 8;
  
    // Update state to indicate whether password is valid
    setIsPasswordValid(isValidPassword);
  };
  const { updateToken } = useContext(AuthContext)
  const handleSignUp = async() => {
    res = await api.post({url:"api/accounts/register",
                                data: `username=${username}&name=${name}&password=${password}`});
                                
    // console.log(res);
    updateToken(res.token);
    navigation.navigate('LogIn');
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <Text style={styles.welcomeText}>Hello! Welcome Back</Text>
      <Text style={styles.welcomeText}>{process.env.API_BACKEND_BASE_URL}</Text>
      
      
      <View style={styles.inputBox}>
      <FloatingLabelInput
                label="Enter Your Account"
                value={name}
                keyboardType="ascii-capable"
                onChangeText={value => setName(value)}
                customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
                containerStyles={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    backgroundColor: '#ffffff',
                    borderColor: '#E1E1E1',
                    borderRadius: 8,
                    marginBottom:8,
                    height: 60
                }}
            />
      </View>
      <View style={styles.inputBox}>
      <FloatingLabelInput
            label="Enter Your Email"
            value={username}
            keyboardType="ascii-capable"
            onChangeText={handleUsernameChange}
            customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
            containerStyles={{
                  borderWidth: 1,
                  paddingHorizontal: 8,
                  backgroundColor: '#ffffff',
                  borderColor: isEmailValid ? '#E1E1E1' : 'red',
                  borderRadius: 8,
                  marginBottom: 8,
                  height: 60
      }}
    />
      </View>
      <Text style={styles.passwordInfo}>You will use this email address to log in.</Text>
      <View style={styles.inputBox}>
      <FloatingLabelInput
            label="Enter Your Password"
            value={password}
            keyboardType="ascii-capable"
            secureTextEntry={!showPassword}
            onChangeText={handlePasswordChange}
            customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
            containerStyles={{
                  borderWidth: 1,
                  paddingHorizontal: 8,
                  backgroundColor: '#ffffff',
                  borderColor: isPasswordValid ? '#E1E1E1' : 'red',
                  borderRadius: 8,
                  marginBottom: 8,
                  height: 60
                }}
    />
       
        <TouchableOpacity style={styles.showButton} onPress={toggleShowPassword}>
          <Text style={styles.showButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.passwordInfo}>Your password must have at least 8 characters</Text>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.agreementText}>
        By clicking Sign Up, you agree to the <Text style={{ color: 'blue',fontWeight: '500' }}>Terms of Service</Text> and <Text style={{ color: 'blue',fontWeight: '500' }}>Privacy Policy</Text>
      </Text>
      <Text style={styles.agreementText}>
        Already a member? <Text style={{ color: 'blue',fontWeight: 'bold' }} onPress={() => navigation.navigate('LogIn')}>Sign In</Text>
      </Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  signUpText: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 132,
    height: 40,
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    color: '#000000',
  },
  welcomeText: {
    position: 'absolute',
    top: 100,
    left: 10,
    width: 343,
    height: 39,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  inputBox: {
    marginTop: 20,
    width: 343,
    height: 58,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    top:20,
  },
  input: {
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  showButton: {
    padding: 8,
    right: 70,
    bottom:3,
    borderRadius: 6,
  },
  showButtonText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
  },
  passwordInfo: {
    width: 343,
    height: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#717171',
    marginTop: 8,
    top:20,
    left:15,
  },
  signUpButton: {
    paddingHorizontal: 32,
    paddingVertical: 0,
    width: 320,
    height: 48,
    backgroundColor: '#4B61DD',
    borderWidth: 1,
    borderColor: '#4B61DD',
    borderRadius: 6,
    shadowColor: '#000',
    top:40,
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
  agreementText: {
    width: 343,
    height: 39,
    fontWeight: '400',
    fontSize: 15,
    textAlign:'center',
    color: '#919191',
    marginTop: 20,
    top:40,
  },
 
});
