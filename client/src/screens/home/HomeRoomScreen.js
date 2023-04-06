import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeRoomScreen({ navigation, route }) {
  const { name } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const handleTapLight = () => {
    return navigation.navigate("HomeLight", {name: "Pendant Lamp"})
  };
  const handleTapAddLight = () => {
    return navigation.navigate("HomeAddLight");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoGrid}>
        <View style={styles.infoItem.container}>
          <View style={styles.infoItem.top}>
            <GroupsOutlineIcon
              name="groups"
              type="outline"
              size={24}
              color="#0E0E17"
            />
          </View>
          <Text style={styles.infoItem.subtitle}>People In Here</Text>
          <Text style={styles.infoItem.title}>No one</Text>
        </View>
        <View style={styles.infoItem.container}>
          <View style={styles.infoItem.top}>
            <Ionicons name="sunny-outline" color="#0E0E17" size={24} />
          </View>
          <Text style={styles.infoItem.subtitle}>Brightness</Text>
          <Text style={styles.infoItem.title}>60%</Text>
        </View>
      </View>
      <View style={styles.sizeBox}></View>
      <View style={styles.lightList.lightHeader.container}>
        <Text style={styles.lightList.lightHeader.title}>Lights</Text>
        <TouchableOpacity style={styles.lightList.lightHeader.button.container}>
          <Text style={styles.lightList.lightHeader.button.text} onPress={handleTapAddLight}>
            Add light
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sizeBox}></View>
      <ScrollView>
        <TouchableOpacity onPress={handleTapLight}>
          <View style={styles.lightItem.container}>
            <View style={styles.lightItem.content}>
              <Text style={styles.infoItem.title}>Pendant Lamp</Text>
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
        <TouchableOpacity onPress={handleTapLight}>
          <View style={styles.lightItem.container}>
            <View style={styles.lightItem.content}>
              <Text style={styles.infoItem.title}>Recessed fixtures</Text>
              <Text style={styles.infoItem.subtitle}>Off</Text>
            </View>
            <Switch
              trackColor={{ false: "#E1E1E1", true: "#384EC7" }}
              thumbColor={"#fff"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  sizeBox: {
    height: 16,
  },
  infoGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  lightList: {
    lightHeader: {
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      title: {
        fontSize: 22,
        fontWeight: 600,
        color: "#1f1f1f",
      },
      button: {
        container: {
          padding: 6,
        },
        text: {
          fontWeight: 600,
          fontSize: 15,
          color: "#384EC7",
        },
      },
    },
    lightGrid: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
});
