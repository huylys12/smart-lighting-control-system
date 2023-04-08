import {
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    TouchableOpacity,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
// import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LightContainer({navigation,lightName,isEnabledProp,brightness}){
    const [isEnabled, setIsEnabled] = useState(isEnabledProp);
    const handleTapLight = () => {
        return navigation.navigate("HomeLight", {name: lightName,brightness:brightness})
    };
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (
        <TouchableOpacity onPress={handleTapLight}>
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