import { StyleSheet, Text, View,Image } from 'react-native';
import { Avatar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Notification from "../notification/Notification";
import ProfileNameComponents from "./ProfileNameComponents";
import ProfilePowerComponents from "./ProfilePowerComponents";
export default function ProfileHomeScreen({navigation}) {
  return (
    <View style={style.container}>
      <View style={{marginHorizontal: 10}}>
        <ProfileNameComponents name={"Harry Brown"}/>
        <ProfilePowerComponents poweruse={"219 kwh"}/>
        <Text style={{fontSize:22,fontWeight:600,marginTop:16}} >Setting</Text>
      
        <Notification text={'Notification'} hour={'Manage the way we send you all the notifications'} name={'notifications'} color={'#384EC7'}/>
        <Notification text={'Automation'} hour={'Permit the app control your lights'} name={'calendar-outline'} color={'#599BF9'}/>
        <Notification text={'Profile'} hour={'Edit information in your profile, even your password'} name={'create-outline'} color={'#FFAC3D'}/>
        <View style={style.logout}>
          <Text style={{textAlign:'center',color:'rgba(75, 97, 221, 0.5)'}}>Log Out</Text>
        </View>
          
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  setting:{   
    fontWeight:'600',
   
  },
  logout:{
    padding:10,
    marginTop:20,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    
    borderWidth:1,
    borderColor:'rgba(75, 97, 221, 0.5)',
  }
  
});
