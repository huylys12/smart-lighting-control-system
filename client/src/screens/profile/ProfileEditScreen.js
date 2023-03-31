import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import NameCom from "./NameCom";
import PasswordCom from '../profile/PasswordCom';
export default function Information({navigation}) {
  return (
    <View style={style.button}>
      <View style={style.header}>
      <Icon style={{textAlign:'left',top:40}} name={"chevron-back-outline"} color={"grey"} size={40} /> 
      
      <Text style={{fontSize:17,textAlign:'center',fontStyle: 'normal', color: '#000000',fontWeight: 'bold',top:10}}> Edit Profile</Text> 
      <Text style={{fontSize:15,color:'#4B61DD',left:370}}>Save</Text>

    <NameCom name={"Harry Brown"}/>
    <PasswordCom title={'Password'} pass={'******'}/>
    <PasswordCom title={'Confirm Password'} pass={'******'} />
    </View>
    
 
      
    </View>
    
    
  )
}
const style = StyleSheet.create({

    
})
