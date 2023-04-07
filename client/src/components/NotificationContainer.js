import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
export default function NotificationContainer({text ,hour,name,color,bgcolor}) {
  return (
    <View style={{display:"flex",
    flexDirection:'row',
    height:100,
    marginTop:16,
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor:bgcolor,
    borderWidth:0.2,
    borderColor:'#919191',
    }}>
      <Icon name={name} color={color} size={40} />  
      <View style={{width:"85%",marginHorizontal:10}}>
        <View style={style.buttonText}>
          <Text style={{fontWeight:"600",fontSize:15,lineHeight:20}}>{text}</Text>
          <Text style={{marginTop:5,color:"#919191"}}>{hour}</Text>
        </View>

      </View>
      
    </View>
    
    
  )
}
const style = StyleSheet.create({
  buttonText:{
    display:"flex",
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center"
   
  }
  
    
})
