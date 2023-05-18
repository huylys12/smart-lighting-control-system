import { useState,useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from "../../components/Checkbox";
import { AntDesign,FontAwesome  } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import * as api from '../../api/api'
import { FloatingLabelInput } from 'react-native-floating-label-input';



export default function LogInScreen({navigation}) {
  const { updateToken, updateUserId, token } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [music, setMusic] = useState(false);
  const [username,setUsername] = useState('');
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
  const handleLogin = async() => {
    const res = await api.post({url:"api/accounts/login",
              data:`username=${username}&password=${password}`});
    if(res){
      // console.log(res);
      updateToken(res.token);
      // const user = await api.get({url:"http://192.168.31.26:3000/api/accounts/me",token:token});
      // const userId = user._id;
      // console.log(userId);
      // updateUserId(userId);
      navigation.navigate("Main")
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign In</Text>
      <Text style={styles.welcomeText}>Hello! Welcome Back</Text>
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
      
      <TouchableOpacity style={styles.signUpButton} onPress={handleLogin} >
        <Text style={styles.signUpButtonText} >Log In</Text>
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
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 4
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
    marginBottom:10,
    flexDirection: 'collumn',
    alignItems: 'left',
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
    left: 250,
    bottom:55,
    
    borderRadius: 6,
  },
  showButtonText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
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
    color: 'blue',
    fontWeight: '600',
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
  fontWeight:'bold',
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