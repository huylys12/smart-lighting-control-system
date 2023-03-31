import { StyleSheet, Text, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
export default function ProfilePowerComponents({poweruse}) {
    return (
      <View style={style.container}>
       
        <View style={style.power}>
            <Icon style={{textAlign:'left'}} name={"flash-outline"} color={"white"} size={30} />  
            <Text style={{top:9,marginHorizontal:10,fontSize:15,color:'#FFFFFF'}}>{poweruse}</Text>
            <Text style={{color:'rgba(225, 225, 225, 0.8)',fontSize:15,top:9,left:110}}>Power Usage Today</Text>
        </View>
        
      </View>
    );
  }
  
  const style = StyleSheet.create({
    power:{
    flexDirection:'row',
    marginLeft:16,
    marginRight:16,
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#383F5D',
   
    }
  });