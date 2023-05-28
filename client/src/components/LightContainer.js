import {
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    TouchableOpacity,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext,useEffect } from "react";
import * as api from "../api/api";
import { AuthContext } from "../context/AuthContext";
// import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LightContainer({navigation,lightName,isEnabledProp,brightness,lightId,roomId,setLightList,type,color,statusFK,colorFK,brightnessFK}){
    const { token } = useContext(AuthContext);
    const [isEnabled, setIsEnabled] = useState(isEnabledProp);
    const handleTapLight = () => {
        return navigation.navigate("HomeLight", {name: lightName,
                                                brightness:brightness,
                                                type:type,
                                                color:color,
                                                lightId:lightId,
                                                isEnabledProp:isEnabled,
                                                colorFK:colorFK,
                                                brightnessFK:brightnessFK
                                              })
    };
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    useEffect(() => {
      setIsEnabled(isEnabledProp);
    },[isEnabledProp]);

    useEffect(() => {
      // console.log(isEnabled);
      const update = async() => {
        const res = await api.patch({url:`api/lights/${lightId}/update`,data:`status=${isEnabled}`,token:token});
        // console.log(res);
        const res_1 = await api.post({url:'api/adafruit/post',data:`feed=${statusFK}&data=${isEnabled ? '1' : '0'}`,token:token});
        // console.log(res_1);
      };
      update();
    },[isEnabled]);
    const handleDelete = async() => {
      const res = await api._delete({url:`api/lights/${lightId}/delete`,token:token});
      if(res){
        const res1 = await api.get({url:`api/lights/room/${roomId}`,token:token});
        if(res1){
          setLightList(res1.lights);
          // console.log(res1.lights);
        }
        // reRender();
      }
    }
    return (
        <TouchableOpacity onPress={handleTapLight}>
          <TouchableOpacity style={{display:"flex",alignItems:"flex-end"}} onPress={handleDelete}><Text style={{color:"#384EC7"}}>Delete</Text></TouchableOpacity>
          <View style={styles.lightItem.container}>
            <View style={styles.lightItem.content}>
              <Text style={styles.infoItem.title}>{lightName}</Text>
              <Text style={styles.infoItem.subtitle}>{isEnabled ? "On" : "Off"}</Text>
            </View>
            <Switch
              trackColor={{ false: "#E1E1E1", true: "#384EC7" }}
              thumbColor={"#fff"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    infoItem: {
      container: {
        borderRadius: 8,
        backgroundColor: "#F5F5F7",
        padding: 16,
        minWidth: "48%",
        marginVertical: 8,
      },
      title: {
        fontSize: 17,
        fontWeight: 600,
        marginVertical: 4,
        color: "#0E0E17",
      },
      subtitle: {
        color: "#919191",
        fontSize: 13,
        fontWeight: 600,
      },
      top: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
      },
    },
    lightItem: {
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8
      },
      content: {
        flexDirection: "column",
      },
    },
  });