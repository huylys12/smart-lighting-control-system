import { StyleSheet, Text, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
export default function ProfilePower({poweruse}) {
    return (
      <View style={style.container}>
        <Icon style={{textAlign:'left'}} name={"flash-outline"} color={"white"} size={30} />
        <View style={{width:"85%",marginHorizontal:10}} >
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>{poweruse}</Text>
              <Text style={{color:'rgba(225, 225, 225, 0.8)',fontSize:15,}}>Power Usage Today</Text>
          </View>
        </View>
        
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container:{
    flexDirection:'row',
    display:"flex",
    padding:10,
    alignItems:"center",
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#383F5D',
    },
    
  });