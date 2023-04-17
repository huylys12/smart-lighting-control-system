import {
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import Ionicons from "react-native-vector-icons/Ionicons";
  import Slider from "@react-native-community/slider";
  import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
  import React, { useState,useContext,useEffect } from "react";
  import * as api from "../api/api";
  import { AuthContext } from "../context/AuthContext";

export default function RoomContainer({navigation,roomName,numLight,isEnabledProp,roomId, brightness,peopleInHere,setRoomList,brightnessFK,motionFK}){
    const { token } = useContext(AuthContext);
    const [isEnabled, setIsEnabled] = useState(isEnabledProp);
    const toggleSwitch = async() => {
        setIsEnabled((previousState) => !previousState)
    };
    useEffect(() => {
      console.log(isEnabled);
      const update = async() => {
        const res = await api.patch({url:`api/rooms/${roomId}/update`,data:`status=${isEnabled}`,token:token});
        console.log(res);
      };
      update();
    },[isEnabled])
    const handleTapRoomItem = () => {
        return navigation.navigate('HomeRoom', {
            name: roomName,
            roomId:roomId,
            brightness:brightness,
            peopleInHere:peopleInHere,
            motionFK:motionFK,
            brightnessFK:brightnessFK
        });
    };
    const handleDelete = async() => {
      const res = await api._delete({url:`api/rooms/${roomId}/delete`,token:token});
      if(res){
        const res1 = await api.get({url:"api/rooms/all",token:token});
        if(res1) setRoomList(res1.rooms);
        // console.log(res1.rooms);
      }
    }
    return (
        <TouchableOpacity >
            <View style={styles.roomItem.container}>
              <View style={{display:"flex",justifyContent:"flex-end",flexDirection:"row"}}>
                <TouchableOpacity onPress={handleDelete}>
                  <Text style={{fontSize: 12,fontWeight:700,color:"#384EC7"}}>Delete</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleTapRoomItem}>
              <View style={styles.roomItem.top}>
                <GroupsOutlineIcon
                  name="groups"
                  type="outline"
                  size={24}
                  color="#0E0E17"
                />
                <Switch
                  trackColor={{ false: "#E1E1E1", true: "#384EC7" }}
                  thumbColor={"#fff"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Text style={styles.roomItem.title}>{roomName}</Text>
              <Text style={styles.roomItem.subtitle}>{`${numLight} Lights`}</Text>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    roomItem: {
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
  });
  