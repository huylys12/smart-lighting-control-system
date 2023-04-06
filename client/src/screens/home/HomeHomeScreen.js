import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FamilyRestroomOutlinedIcon from "react-native-vector-icons/MaterialIcons";
import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
import RoomContainer from "../../components/RoomContainer";

export default function HomeHomeScreen({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const handleTapRoomItem = () => {
    return navigation.navigate('HomeRoom', {
      name: "Living Room"});
  };
  
  const handleTapAddRoom = () => {
    return navigation.navigate("HomeAddRoom");
  }
  return (
    <View style={styles.container}>
      <View style={styles.intro.container}>
        <View>
          <Text style={styles.intro.subtitle}>
            I'm always here to help you!
          </Text>
          <Text style={styles.intro.subtitle}>Call me by</Text>
          <Text style={styles.intro.title}>"Hey Max"</Text>
        </View>
        <Image
          style={styles.intro.image}
          source={require("../../../assets/images/bot.png")}
        />
      </View>
      <View style={styles.sizeBox}></View>
      <View style={styles.roomList.roomHeader.container}>
        <Text style={styles.roomList.roomHeader.title}>Rooms</Text>
        <TouchableOpacity style={styles.roomList.roomHeader.button.container}>
          <Text style={styles.roomList.roomHeader.button.text} onPress={handleTapAddRoom}>Add room</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.roomList.roomGrid}>
          <RoomContainer isEnabledProp={true} navigation={navigation} numLight={10} roomName={"Living Room"} key={1} />
          <RoomContainer isEnabledProp={false} navigation={navigation} numLight={3} roomName={"Dining Room"} key={2} />
          <RoomContainer isEnabledProp={true} navigation={navigation} numLight={4} roomName={"Bed Room 1"} key={3} />
          <RoomContainer isEnabledProp={false} navigation={navigation} numLight={5} roomName={"Bath Room"} key={4} />
          <RoomContainer isEnabledProp={true} navigation={navigation} numLight={6} roomName={"Kitchen"} key={5} />
          <RoomContainer isEnabledProp={false} navigation={navigation} numLight={7} roomName={"Bed Room 2"} key={6} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  sizeBox: {
    height: 24,
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
    roomHeader: {
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
    roomGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
});
