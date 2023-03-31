import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function HomeLightScreen({ navigation, route }) {
  const { name } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <View style={styles.condItem.container}>
          <View style={styles.condItem.content}>
            <Text style={styles.condItem.content.title}>Pendant Lamp</Text>
            <Text style={styles.condItem.content.subtitle}>On</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  condItem: {
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
