import { StyleSheet, Text, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
export default function ProfileName({name, avata}) {
    return (
      <View style={style.container}>
       <View style={style.button}>
          <Avatar.Image size={60} source={{
                      uri: avata,
                  }}
          />
          <View>
          <Text style={{color:'#919191',fontSize:13,top:20}}>Welcome </Text>
            <Text style={{top:20,fontSize:20}}>{name}</Text>
          </View>       
        </View> 
        
      </View>
    );
  }
  
  const style = StyleSheet.create({
    button: {
      
      flexDirection:'row',
      marginTop:16,
      borderRadius:8,
      paddingVertical: 14, 
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
    
  });