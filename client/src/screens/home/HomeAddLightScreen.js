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
import React, { useState,useContext } from "react";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AuthContext } from "../../context/AuthContext";
import * as api from "../../api/api";
import { Picker } from "@react-native-picker/picker";

export default function HomeAddLightScreen({ navigation, route}) {
    const { roomId } = route.params;
    const { token,reRender } = useContext(AuthContext);
    const [lightName, setLightName] = useState('');
    const [brightnessFK, setBrightnessFK] = useState('');
    const [colorFK, setColorFK] = useState('');
    const [statusFK,setStatusFK] = useState('');
    const [selected,setSelected] = useState('brightness');
    const handleSave = async() => {
        //Create Light
        if(lightName != '' && brightnessFK != '' && colorFK != ''){
            const res = await api.post({url:`api/lights/create/room/${roomId}`,
                        data:`name=${lightName}&brightnessFeedKey=${brightnessFK}&colorFeedKey=${colorFK}&type=${selected}&statusFeedKey=${statusFK}`,token:token});
            if(res){
                // const res1 = await api.post({url:'api/accounts/refreshToken'});
                reRender();
                navigation.goBack();
                // navigation.navigate('HomeHome');
            }
        }
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: "Add Light" ,
                                headerTitleAlign: "center",
                                // headerRight: () => (
                                //     <TouchableOpacity onPress={() => handleSave()}>
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
                label="Light Name"
                value={lightName}
                keyboardType="ascii-capable"
                onChangeText={value => setLightName(value)}
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
            <FloatingLabelInput
                label="Status Feed Key"
                value={statusFK}
                keyboardType="ascii-capable"
                onChangeText={value => setStatusFK(value)}
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
            <Picker 
              selectedValue={selected}
              style={{ height: 50, width: 200,borderWidth: 1, borderColor: '#000000'}}
              mode='dropdown'
              onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
            >
              <Picker.Item label='Color' value="color" />
              <Picker.Item label='Brightness' value="brightness" />
            </Picker>
            <TouchableOpacity
                style={{backgroundColor: "#4B61DD",width: Dimensions.get('screen').width-32,marginTop:10,borderRadius:25,marginBottom: 16}}
                onPress={() => handleSave()}
            >
              <Text style={{fontSize: 20,textAlign:"center",margin: 16,color:"white"}}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
  
