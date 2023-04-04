import Ionicons from "react-native-vector-icons/Ionicons";
import {Text, View} from 'react-native';
export default function DeviceInforCard({name, percent,device}){
    return (
        <View style={{backgroundColor:"#F5F5F7", borderRadius: 25, display:"flex", flexDirection:"row",padding:10,alignItems:"center",marginTop:5}}>
          <Ionicons name={device} color="black" size={30} />
          <View style={{width:"85%",marginHorizontal:10}}>
            <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
              <Text>{name}</Text>
              <Text>{percent}%</Text>
            </View>
            <View style={{backgroundColor:'#D9D9D9',width: "100%", height:10,borderRadius:25}}>
              <View style={{backgroundColor:'#2600B4',width: `${percent}%`, height:10,borderRadius:25}}></View>
            </View>
          </View>
        </View>
    )
}