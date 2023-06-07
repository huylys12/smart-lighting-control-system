import {
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import Icon from 'react-native-vector-icons/Ionicons';
  import { useNavigation } from "@react-navigation/native";
  import Ionicons from "react-native-vector-icons/Ionicons";
  import Slider from "@react-native-community/slider";
  import GroupsOutlineIcon from "react-native-vector-icons/MaterialIcons";
  import React, { useState,useContext,useEffect } from "react";
  import { AuthContext } from "../../context/AuthContext";

export default function RoomContainer({navigation}){
    const { token } = useContext(AuthContext);
    const [isEnabled, setIsEnabled] = useState('false');
    const toggleSwitch = async() => {
        setIsEnabled((previousState) => !previousState)
    };
    const handleTO = async() => {
      }
    
    return (
     
      <TouchableOpacity>
  <View style={styles.roomItem.container}>
    <View style={styles.roomItem.iconAndTitle}>
      <Icon name={'notifications'} color={'black'} size={40} />
      <Text style={styles.roomItem.title}>Push notification</Text> 
      <View style={{ flex: 1 }} />
      <Text style={styles.roomItem.autoText}>Auto</Text>
      <Switch
        trackColor={{ false: "#E1E1E1", true: "#384EC7" }}
        thumbColor={"#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
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
    iconAndTitle: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    title: {
      fontSize: 17,
      fontWeight: 600,
      marginLeft: 8,
      color: "#0E0E17",
    },
    autoContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 8,
      flex: 1,
      marginLeft: 16,
    },
    autoText: {
      fontSize: 12,
      fontWeight: 700,
      marginRight: 8,
      color: "#384EC7",
    },
  },
});

