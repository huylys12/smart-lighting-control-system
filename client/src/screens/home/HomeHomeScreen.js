import { StyleSheet, Text, View, Switch, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";

export default function HomeHomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.intro.container}>
        <View>
          <Text style={styles.intro.subtitle}>
            I’m always here to help you!
          </Text>
          <Text style={styles.intro.subtitle}>Call me by</Text>
          <Text style={styles.intro.title}>"Hey Max"</Text>
        </View>
        <Image
          style={styles.intro.image}
          source={require("../../../assets/images/bot.png")}
        />
      </View>
      <View style={styles.roomList.roomGrid}>
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
          <Text style={styles.roomItem.title}>Living Room</Text>
          <Text style={styles.roomItem.subtitle}>3 Lights</Text>
        </View>
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
          <Text style={styles.roomItem.title}>Living Room</Text>
          <Text style={styles.roomItem.subtitle}>3 Lights</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    justifyContent: "start",
  },
  intro: {
    container: {
      backgroundColor: "#4B61DD",
      padding: 16,
      width: "100%",
      borderRadius: 8,
      flexDirection: "row",
      paddingTop: 24,
    },
    image: {
      width: 120,
      height: 100,
    },
    title: {
      color: "white",
      fontSize: 28,
      fontWeight: "bold",
      marginVertical: 8,
    },
    subtitle: {
      color: "#E1E1E1",
      fontSize: 15,
      fontWeight: 400,
    },
  },

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
  roomList: {
    roomGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
});
