import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from "../../components/Checkbox";
import { AntDesign,FontAwesome  } from '@expo/vector-icons';
export default function LogInScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [music, setMusic] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setisFocusedPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [showNotification, setShowNotification] = useState(false);


  const handleFocusEmail = () => setIsFocusedEmail(true);
  const handleBlurEmail = () => setIsFocusedEmail(false);
  
  const handleFocusPassword = () => setisFocusedPassword(true);
  const handleBlurPassword = () => setisFocusedPassword(false);
  
  const checkEmailValidity = (email) => {
    setIsValidEmail(email.includes('@'));
    if (email.indexOf('@') === -1) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };
  const checkPasswordValidity = (password) => {
    setIsValidPassword(password.length >= 8);
    if (password.length >= 8) {
      setShowNotification(false);
    } else {
      setShowNotification(true);
    }
  };
  return (
    <View style={styles.container}>
      
      <View style={{ paddingLeft: 10, paddingBottom: 40 }}>
  <Text style={styles.signUpText} >Sign In</Text>
  </View>
  <View style={{ flexDirection: 'column' ,top:10}}>
    <Text style={styles.welcomeText}>Hello! Welcome Back</Text>
  </View>

      
     
      <View style={[styles.inputBox,!isValidEmail && styles.invalidInput]}>
    {isFocusedEmail && <Text style={styles.title}>Email Address</Text>}
    <TextInput
      placeholder="Enter your email"
      style={[
        styles.input
      ]}
      onFocus={handleFocusEmail}
      onBlur={handleBlurEmail}
      placeholderTextColor={isFocusedEmail ? 'transparent' : '#999999'}
      onChangeText={checkEmailValidity}
    />
    
  </View>
  {!isValidEmail && (
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>
          Email address must include @ symbol.
        </Text>
  
      </View>
    )}
      <View style={[styles.inputBox,!isValidPassword && { borderColor: 'red' }]}>
      {isFocusedPassword && <Text style={styles.title}>Password</Text>}
        <TextInput placeholder="Enter your Password" 
        secureTextEntry={!showPassword} style={styles.input}
        onFocus={handleFocusPassword}
          onBlur={handleBlurPassword}
          placeholderTextColor={isFocusedPassword ? 'transparent' : '#999999'}
          onChangeText={(text) => {
            setPassword(text);
            checkPasswordValidity(text);
          }}
        />
        <TouchableOpacity style={styles.showButton} onPress={toggleShowPassword}>
          <Text style={styles.showButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {showNotification && (
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>
          Password must be at least 8 characters long.
        </Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => setShowNotification(false)}
        >
          
        </TouchableOpacity>
      </View>
    )}
      <TouchableOpacity style={styles.signUpButton} onPress={() => { if (isValidEmail && isValidPassword) {
      navigation.navigate('SignUp');
    }}}>
        <Text style={styles.signUpButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.rememberMeContainer}>
      <CheckBox
                onPress={() => setMusic(!music)}
                title="Remember me"
                isChecked={music}
              />
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.orText}>OR LOGIN WITH</Text>
        <View style={styles.horizontalLine} />
      </View>
      <View style={{ flexDirection: 'row' }}>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <AntDesign name="apple1" size={24} color="#000" />
              </View>
            </View>
              <View style={styles.box}>
                <View style={styles.iconContainer}>
                  <FontAwesome  name="google" size={24} color="#000" />
                </View>
              </View>
      </View>
      <Text style={styles.agreementText}>
       Don't have an account? <Text style={{ color: 'blue',fontWeight: '600' }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
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
  notificationBox: {
    borderColor: '#FF4D4D',
    
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'left', // align content horizontally to the left
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 15,
    left: 10,
    alignSelf: 'flex-start',
  },
  notificationText: {
    color: '#FF4D4D',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationButton: {
    display: 'none',
  },
  
  signUpText: {
    position: 'absolute',
    left:-165,
    height: 40,
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    color: '#000000',
  },
  welcomeText: {
    position: 'absolute',
   left:-165,
    width: 343,
    height: 39,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
    
  },
  title: {
    position: 'absolute',
    top: 4,
    left: 8,
    fontSize: 12,
    color: '#999999',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5
  },
  inputBox: {
    marginTop: 20,
    width: 343,
    height: 58,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E1E1',
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
    marginLeft: 10,
    
    borderRadius: 6,
  },
  showButtonText: {
    fontWeight: '300',
    fontSize: 14,
    color: '#919191',
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    left:-90,
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
  forgotPasswordText: {
    marginLeft: -140,
    marginTop:5,
    color: '#919191',
    fontWeight: '400',
    left:180,
  },
  orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 10,
},
horizontalLine: {
  flex: 1,
  height: 1,
  backgroundColor: '#919191',
},

orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 10,
},
horizontalLine: {
  flex: 1,
  height: 1,
  backgroundColor: '#919191',
},
orText: {
  width: 219,
  height: 39,
  fontWeight: '400',
  fontSize: 15,
  textAlign: 'center',
  color: '#919191',
  marginLeft: 5,
  marginRight: 5,
  top:10,
  fontWeight:'normal',
},
box: {
  width: 163,
  height: 48,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#E1E1E1',
  borderRadius: 6,
  marginTop: 10,
  marginRight: 15,
  marginLeft: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
iconContainer: {
  width: 24,
  height: 24,
  alignItems: 'center',
  justifyContent: 'center',
},

});