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
import Paho from 'paho-mqtt';
import { ADAFRUIT_USER, ADAFRUIT_KEY } from "../../../secret";



export default function HomeRoomScreen({ navigation, route }) {
  const client = new Paho.Client('wss://io.adafruit.com:443/mqtt/', '');
  const {token, refresh, reRender} = useContext(AuthContext);
  const { name,roomId, brightnessFK,motionFK } = route.params;
  
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);

  const [lightList,setLightList] = useState([]);
  const [brightness,setBrightness] = useState(0);
  const [peopleInHere,setPeopleInHere] = useState('');
  const handleTapAddLight = () => {
    return navigation.navigate("HomeAddLight",{'roomId':roomId});
  };
  useEffect(() => {
    const fetchData = async() => {
      const res = await api.get({url:`api/lights/room/${roomId}`,
                                token: token});
      // if(res) console.log(res);
      setLightList(res.lights);
    }
    fetchData();
    // console.log("home room re render");
  },[token,roomId,refresh]);

  useEffect(() => {
    client.connect({
      useSSL: true,
      userName: ADAFRUIT_USER,
      password: ADAFRUIT_KEY,
      onSuccess: () => {
        console.log('Connected to Adafruit');
        client.subscribe(`PhucHo/feeds/${brightnessFK}`);
        client.subscribe(`PhucHo/feeds/${motionFK}`);
      },
      onFailure: (message) => {
        console.log('Failed to connect to Adafruit: ', message.errorMessage);
      },
    });
    client.onMessageArrived = async (message) => {
      console.log('Message arrived on topic:', message.destinationName, message.payloadString);
      if(message.destinationName == `PhucHo/feeds/${brightnessFK}`){
        setBrightness(message.payloadString);
        if(parseInt(message.payloadString) <= 20){
          await api.post({url:'api/notifications/create',data:`title=${name} is too dark`,token:token});
          reRender();
        }else if(parseInt(message.payloadString) >= 70){
          await api.post({url:'api/notifications/create',data:`title=${name} is too bright`,token:token});
          reRender();
        }
        // console.log("hello there");
      }else if(message.destinationName == `PhucHo/feeds/${motionFK}`){
        setPeopleInHere(message.payloadString);
        if(message.payloadString == "No one"){
          await api.post({url:'api/notifications/create',data:`title=No one in ${name}`,token:token});
          reRender();
        }
      }
    }
    return () => {
      client.disconnect({
        onSuccess: function() {
          console.log("Disconnected successfully.");
        },
        onFailure: function(err) {
          console.log("Disconnect failed: " + err.errorMessage);
        }
      });
    }
  },[]);
  useEffect(() => {
    const fetchData = async() => {
      // console.log(motionFK,brightnessFK);
      const res = await api.post({url:`api/adafruit/get`,
                                data:`feed=${motionFK}`,
                                token: token});
      // console.log(res.data[0].value);
      setPeopleInHere(res.data[0].value);
      const res_1 = await api.post({url:`api/adafruit/get`,
                                  data:`feed=${brightnessFK}`,
                                  token: token});
      // console.log(res_1.data[0].value);
      setBrightness(res_1.data[0].value);
    }
    // const interval = setInterval(async() => {
    //   fetchData();
    // },30000);
    fetchData();
    // return clearInterval(id);
    // return () => clearInterval(interval);
  },[]);

  useEffect(() =>{
    const fetchData = async() => {
      const res_2 = await api.patch({url:`api/rooms/${roomId}/update`,
                                    data:`brightness=${brightness}&peopleInHere=${peopleInHere}`,
                                    token: token});
      console.log(res_2);
      // reRender();
    }
    fetchData();
  },[brightness,peopleInHere]);
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
          lightList?.map((light) => (
            <LightContainer isEnabledProp={light.status} 
                            lightName={light.name} 
                            navigation={navigation} 
                            key={light._id} 
                            brightness={light.brightness} 
                            lightId={light._id} 
                            setLightList={setLightList} 
                            roomId={roomId} 
                            type={light.type}
                            color={light.color}
                            statusFK={light.statusFeedKey}
                            colorFK={light.colorFeedKey}
                            brightnessFK={light.brightnessFeedKey}
            />
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
