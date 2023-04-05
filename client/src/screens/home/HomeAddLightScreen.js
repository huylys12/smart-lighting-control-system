import {
    View,
    ScrollView,
    TouchableOpacity,
    Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { FloatingLabelInput } from 'react-native-floating-label-input';

export default function HomeAddRoomScreen({ navigation}) {
    const handleSave = () => {
        //Create Room
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: "Add Light" ,
                                headerTitleAlign: "center",
                                headerRight: () => (
                                    <TouchableOpacity onPress={() => handleSave()}>
                                        <Text style={{ color: "#4B61DD", marginRight: 8,fontWeight:700 }}>Save</Text>
                                    </TouchableOpacity>
                                )}
                            );
    }, [navigation]);

    const [roomName, setRoomName] = useState('');
    const [brightnessFK, setBrightnessFK] = useState('');
    const [colorFK, setColorFK] = useState('');

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                // justifyContent: 'center',
                // alignItems: 'stretch',
                margin: 16,
            }}
            style={{backgroundColor: "white"}}
        >
        
            <FloatingLabelInput
                label="Light Name"
                value={roomName}
                keyboardType="ascii-capable"
                onChangeText={value => setRoomName(value)}
                customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
                containerStyles={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    backgroundColor: '#ffffff',
                    borderColor: '#E1E1E1',
                    borderRadius: 8,
                    marginBottom:8,
                    height: 60
                }}
            />
        
       
            <FloatingLabelInput
                label="Brightness Feed Key"
                value={brightnessFK}
                keyboardType="ascii-capable"
                onChangeText={value => setBrightnessFK(value)}
                customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
                containerStyles={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    backgroundColor: '#ffffff',
                    borderColor: '#E1E1E1',
                    borderRadius: 8,
                    marginBottom:8,
                    height: 60
                }}
            />
        
        
            <FloatingLabelInput
                label="Color Feed Key"
                value={colorFK}
                keyboardType="ascii-capable"
                onChangeText={value => setColorFK(value)}
                customLabelStyles={{colorFocused:"#717171",colorBlurred:"#717171"}}
                containerStyles={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    backgroundColor: '#ffffff',
                    borderColor: '#E1E1E1',
                    borderRadius: 8,
                    marginBottom:8,
                    height: 60
                }}
            />
        </ScrollView>
    );
}
  
