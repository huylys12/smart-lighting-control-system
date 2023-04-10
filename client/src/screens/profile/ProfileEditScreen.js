import { StyleSheet, Text, View,TouchableOpacity,ScrollView , TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import NameCom from "./NameCom";
import PasswordCom from '../profile/PasswordCom';
import React, { useState } from "react";
import { FloatingLabelInput } from 'react-native-floating-label-input';
export default function Information({navigation}) {
  const handleSave = () => {
  }
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  React.useLayoutEffect(() =>{
    navigation.setOptions({
    headerTitle: "Edit Profile",
    headerTitleAlign:"center",
    headerRight: ()=> (
      <TouchableOpacity onPress={() => handleSave}>
        <Text style={{fontSize:15,color:'#4B61DD'}}>Save</Text>
      </TouchableOpacity>
    )
    });
  }, [navigation] )
  return (
    <ScrollView  keyboardShouldPersistTaps="handled"
    contentContainerStyle={{
        margin: 16,
    }}
    style={{backgroundColor: "white"}}>
       <View style={style.inputBox}>
        <TextInput placeholder="Full Name" style={style.input} onChangeText={(value) => setUsername(value)} />
      </View>
      <View style={style.inputBox}>
        <TextInput placeholder="Enter your Password" secureTextEntry={!showPassword} style={style.input} onChangeText={(value) => setPassword(value)} />
        <TouchableOpacity style={style.showButton} onPress={toggleShowPassword}>
          <Text style={style.showButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:12,color:'#717171'}}>Your password must be at least 8 characters</Text>
      <View style={style.inputBox}>
        <TextInput placeholder="Confirm Password" secureTextEntry={!showPassword} style={style.input} onChangeText={(value) => setPassword(value)} />
        <TouchableOpacity style={style.showButton} onPress={toggleShowPassword}>
          <Text style={style.showButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:12,color:'#717171'}}>This input must be identical to your password</Text>
    </ScrollView>
  
    
  )
}
const style = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    borderWidth: 1,
          paddingHorizontal: 16,
          backgroundColor: '#ffffff',
          borderColor: '#E1E1E1',
          borderRadius: 8,
          marginBottom:8,
          marginTop:8,
          height: 60,
  },
  input: {
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  showButton:{
      top:16
  },
  
  showButtonText: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#717171',
  },
})
