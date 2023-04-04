import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CompletedCard({section,subsection}){
    return (
        <View style={{
            borderRadius: 15, 
            paddingHorizontal: 5,
            paddingVertical: 10, 
            marginTop: 8,
            backgroundColor:"#F1F0FD",
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        }}>
            <Ionicons name="checkmark-circle-outline" size={20} style={{marginRight: 10,color:"#5061FF"}} />
            <View>
                <Text style={{color:"#384EC7"}}>{section}</Text>
                <Text style={{color:"#384EC7",opacity: 0.5}}>{subsection}</Text>
            </View>
        </View>
    )
}
