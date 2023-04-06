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
  import React, { useState } from "react";

export default function RoomContainer({navigation,roomName,numLight,isEnabledProp}){
    const [isEnabled, setIsEnabled] = useState(isEnabledProp);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    const handleTapRoomItem = () => {
        return navigation.navigate('HomeRoom', {
            name: roomName});
    };
    return (
        <TouchableOpacity onPress={handleTapRoomItem}>
            <View style={styles.roomItem.container}>
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
  