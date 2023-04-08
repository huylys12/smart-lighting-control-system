import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from "react";
import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LightContainer from "../../components/LightContainer";
import RoomInfo from "../../components/RoomInfo";
import { AuthContext } from "../../context/AuthContext";
import * as api from "../../api/api";


export default function HomeRoomScreen({ navigation, route }) {
  const {token} = useContext(AuthContext);
  const { name,roomId,brightness, peopleInHere } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   setIsEnabled((previousState) => !previousState);
  // };

  // const handleTapLight = () => {
  //   return navigation.navigate("HomeLight", {name: "Pendant Lamp"})
  // };
  const [lightList,setLightList] = useState([]);
  const handleTapAddLight = () => {
    return navigation.navigate("HomeAddLight");
  };
  useEffect(() => {
    const fetchData = async() => {
      const res = await api.get({url:`api/lights/room/${roomId}`,
                            token: token});
      // if(res) console.log(res);
      setLightList(res.lights);
    }
    fetchData();
  },[token,roomId]);

  return (
    <View style={styles.container}>
      <View style={styles.infoGrid}>
        <RoomInfo header={<GroupsOutlineIcon
                                  name="groups"
                                  type="outline"
                                  size={24}
                                  color="#0E0E17"
                                />} subtitle={"People In Here"} title={peopleInHere} key={1} />
        <RoomInfo header={<Ionicons name="sunny-outline" color="#0E0E17" size={24} />} subtitle={"Brightness"} title={`${brightness}%`} key={2} />
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
        {/* <LightContainer isEnabledProp={false} lightName={"Pendant Lamp"} navigation={navigation} key={1} />
        <LightContainer isEnabledProp={false} lightName={"Recessed fixtures"} navigation={navigation} key={2} /> */}
        {
          lightList.map((light) => (
            <LightContainer isEnabledProp={light.status} lightName={light.name} navigation={navigation} key={light._id} brightness={light.brightness} />
          ))
        }
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
