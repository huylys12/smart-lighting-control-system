import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Information({text ,hour,name}) {
  return (
    <View style={style.button}>
      <Icon style={{textAlign:'left',top:20}} name={name} color={"blue"} size={40} />  
      <View>
      <Text style={style.buttonText}>
        {text}
      </Text>
      <Text style={{fontSize:13,top:25,color:'#919191'}}>
        {hour}
      </Text>
      </View>
      
    </View>
    
    
  )
}
const style = StyleSheet.create({
  button: {
    
    flexDirection:'row',
    width:380,
    height:108,
    marginLeft:16,
    marginRight:16,
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#E1E1E1',
   
    
  },
  buttonText:{
    top:20,
    fontSize: 15,
    
  }
  
    
})
