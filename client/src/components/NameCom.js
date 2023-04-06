import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
export default function NameCom({name}) {
  return (
    <View style={style.button}> 
      <View>
        <Text style={{fontSize:12,color:'#717171'}}>Full Name</Text>
      <Text style={style.buttonText}>
        {name}
      </Text>
      
     
      </View>
      
    </View>
    
    
  )
}
const style = StyleSheet.create({
  button: {
    
    flexDirection:'row',
    width:380,
    height:90,
    marginLeft:16,
    marginRight:16,
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
   
    
  },
  buttonText:{
    marginTop:10,
    fontSize: 17,
    
  }
  
    
})
