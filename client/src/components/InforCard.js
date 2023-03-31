import {Text, View} from 'react-native';

export default function InforCard({section, subsection}){
    return (
        <View style={{
            borderWidth: 0.3,
            borderRadius: 15, 
            paddingHorizontal: 5,
            paddingVertical: 10, 
            marginTop: 5,
            borderColor:"#384EC7"}}>
            <Text style={{color:"#384EC7"}}>{section}</Text>
            <Text style={{color:"#384EC7",opacity: 0.5}}>{subsection}</Text>
        </View>
    )
}