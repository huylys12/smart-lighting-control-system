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
import React, { useEffect, useState,useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import * as api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

export default function HomeLightScreen({ navigation, route }) {
  const { token,reRender } = useContext(AuthContext);
  const colorList = ['red','orange','yellow','green','blue','indigo','violet','white','black'];
  const colorNum = {'red':0,'orange':1,'yellow':2,'green':3,'blue':4,'indigo':5,'violet':6,'white':7,'black':8};
  const { name,brightness, type, color,lightId, isEnabledProp, colorFK, brightnessFK } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);

  const [sliderValue, setSliderValue] = useState(brightness);
  const [selected,setSelected] = useState(color);
  const [isEnabled, setIsEnabled] = useState(isEnabledProp);

  // setSliderValue(brightness);
  // useEffect(() => {
  //   setSliderValue(brightness);
  // },[]);
  useEffect(() => {
    // console.log(isEnabled);
    const update = async() => {
      console.log(colorFK);
      const res = await api.patch({url:`api/lights/${lightId}/update`,data:`color=${selected}`,token:token});
      console.log(res);
      const res_1 = await api.post({url:'api/adafruit/post',data:`feed=${colorFK}&data=${colorNum[selected]}`,token:token});
      console.log(res_1);
      reRender();
    };
    update();
  },[selected]);

  useEffect(() => {
    const update = async() => {
      console.log(brightnessFK);
      const res = await api.patch({url:`api/lights/${lightId}/update`,data:`brightness=${sliderValue}`,token:token});
      console.log(res);
      const res_1 = await api.post({url:'api/adafruit/post',data:`feed=${brightnessFK}&data=${sliderValue}`,token:token});
      console.log(res_1);
      reRender();
    };
    update();
  },[sliderValue]);

  useEffect(() => {
    const update = async() => {
      const res = await api.patch({url:`api/lights/${lightId}/update`,data:`status=${isEnabled}`,token:token});
      console.log(res);
      reRender();
    };
    update();
  },[isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.info.container}>
        <Image
          style={styles.info.image}
          source={require("../../../assets/images/pendant-lamp.jpg")}
        />
        <View style={styles.info.infoList}>
          <View>
            <Text style={styles.infoItem.subtitle}>Name</Text>
            <Text style={styles.infoItem.title}>Jube Vistosi</Text>
          </View>
          <View>
            <Text style={styles.infoItem.subtitle}>Status</Text>
            <View style={styles.rowFlex}>
              <Text style={styles.infoItem.title}>{isEnabled ? "On" : "Off"}</Text>
              <Switch
                trackColor={{ false: "#E1E1E1", true: "#384EC7" }}
                thumbColor={"#fff"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View>
            <Text style={styles.infoItem.subtitle}>Timer</Text>
            <Text style={styles.infoItem.title}>1h 21mins</Text>
          </View>
        </View>
      </View>
      <View style={styles.sizeBox}></View>
      <View>
        <View style={styles.condItem.container}>
          <Ionicons name="sunny-outline" color="#919191" size={24} />
          
            {
              type=='brightness' ? (
                <>
                  <View style={styles.condItem.content}>
                    <Text style={styles.condItem.content.title}>Brightness</Text>
                    <Text style={styles.condItem.content.subtitle}>{sliderValue}%</Text>
                  </View>
                  <Slider
                    style={styles.condItem.slider}
                    value={sliderValue}
                    minimumValue={0}
                    maximumValue={100}
                    step={10}
                    minimumTrackTintColor="#384EC7"
                    maximumTrackTintColor="#e1e1e1"
                    onValueChange={(value) => setSliderValue(value)}
                  />
                </>
              ):(
                <>
                  <View style={styles.condItem.content}>
                    <Text style={styles.condItem.content.title}>Color</Text>
                    <Text style={styles.condItem.content.subtitle}>{selected}</Text>
                  </View>
                  <Picker 
                    selectedValue={selected}
                    style={{ height: 50, width: 200,borderWidth: 1, borderColor: '#000000'}}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                  >
                    {
                      colorList.map(color => (
                        <Picker.Item label={color} value={color} key={color} />
                      ))
                    }
                  </Picker>
                </>
              )
            }
        </View>
      </View>
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
    height: 24,
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      flex: 1,
      width: 120,
      height: 100,
    },
    infoList: {
      flex: 1,
      paddingLeft: 16,
    },
  },
  infoItem: {
    title: {
      fontSize: 17,
      fontWeight: 600,
      marginVertical: 4,
      color: "#0E0E17",
      paddingVertical: 8,
    },
    subtitle: {
      color: "#919191",
      fontSize: 17,
      fontWeight: 600,
      paddingTop: 8,
    },
  },
  condItem: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      with: "100%",
      borderColor: "#E1E1E1",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    slider: {
      width: "50%",
    },
    content: {
      flexDirection: "column",
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
    },
  },
});
