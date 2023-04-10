import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import React, { useCallback, useContext, useState } from "react";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import * as api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

export default function HomeAddRoomScreen({ navigation, route}) {
    const { token, reRender } = useContext(AuthContext);
    const [roomName, setRoomName] = useState('');
    const [brightnessFK, setBrightnessFK] = useState('');
    const [motionFK, setMotionFK] = useState('');
    // const numOfRoom = route.params.numOfRoom;

    const handleSave = async() => {
        //Create Room
        // console.log(roomName,brightnessFK,motionFK);
        if(roomName != '' && brightnessFK != '' && motionFK != ''){
            const res = await api.post({url:"api/rooms/create",
                        data:`name=${roomName}&brightnessFeedKey=${brightnessFK}&motionFeedKey=${motionFK}`,token:token});
            if(res){
                reRender();
                navigation.navigate('HomeHome');
            }
        }
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: "Add Room" ,
                                headerTitleAlign: "center",
                                // headerRight: () => (
                                //     <TouchableOpacity onPress={handleSave}>
                                //         <Text style={{ color: "#4B61DD", marginRight: 8,fontWeight:700 }}>Save</Text>
                                //     </TouchableOpacity>
                                // )
                            });
    }, [navigation]);

   
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
                label="Room Name"
                keyboardType="ascii-capable"
                value={roomName}
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
                keyboardType="ascii-capable"
                value={brightnessFK}
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
                label="Motion Feed Key"
                keyboardType="ascii-capable"
                value={motionFK}
                onChangeText={value => setMotionFK(value)}
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
            <TouchableOpacity
                style={{backgroundColor: "#4B61DD",width: Dimensions.get('screen').width-32,marginTop:10,borderRadius:25,marginBottom: 16}}
                onPress={() => handleSave()}
            >
              <Text style={{fontSize: 20,textAlign:"center",margin: 16,color:"white"}}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
  
