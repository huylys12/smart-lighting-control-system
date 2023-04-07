import {
    StyleSheet,
    Text,
    View,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function RoomInfo({header, subtitle, title}){
    return (
        <View style={styles.infoItem.container}>
          <View style={styles.infoItem.top}>
            {header}
          </View>
          <Text style={styles.infoItem.subtitle}>{subtitle}</Text>
          <Text style={styles.infoItem.title}>{title}</Text>
        </View>
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
});
  