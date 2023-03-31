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
      <View>
        <ProfileNameComponents name={"Harry Brown"}/>
      </View>
      <View>
        <ProfilePowerComponents poweruse={"219 kwh"}/>
      </View>
     <View >
      <Text style={style.setting} >Setting</Text>

     </View>
     <Notification text={'Notification'} hour={'Manage the way we send you all the notifications'} name={'notifications'}/>
     <Notification text={'Automation'} hour={'Permit the app control your lights'} name={'notifications'}/>
     <Notification text={'Profile'} hour={'Edit information in your profile, even your password'} name={'notifications'}/>
     <View style={style.logout}>
        <Text style={{textAlign:'center',color:'rgba(75, 97, 221, 0.5)'}}>Log Out</Text>
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
   fontStyle:'normal',
    fontWeight:'bold',
    color: '#000000',
    fontSize:22,
    left:16,
    height:30,
  },
  logout:{
    
    marginLeft:16,
    marginRight:16,
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    
    borderWidth:1,
    borderColor:'rgba(75, 97, 221, 0.5)',
  }
  
});
