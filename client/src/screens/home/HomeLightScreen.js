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
import React, { useState } from "react";

export default function HomeLightScreen({ navigation, route }) {
  const { name } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);

  const [sliderValue, setSliderValue] = useState(0);
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
            <Text style={styles.infoItem.title}>On</Text>
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
    justifyContent: "start",
  },
  sizeBox: {
    height: 24
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
      flex:1,
      paddingLeft: 16
    }
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
