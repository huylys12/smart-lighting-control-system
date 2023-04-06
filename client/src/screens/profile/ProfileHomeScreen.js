import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationContainer from "../../components/NotificationContainer";
import ProfileName from "../../components/ProfileName";
import ProfilePower from "../../components/ProfilePower";
export default function ProfileHomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <View style={{ marginHorizontal: 16 }}>
        <ProfileName name={"Harry Brown"} />
        <ProfilePower poweruse={"219 kwh"} />
        <Text style={{ fontSize: 22, fontWeight: 600, marginTop: 16 }}>
          Setting
        </Text>
        <ScrollView>
          <NotificationContainer
            text={"Notification"}
            hour={"Manage the way we send you all the notifications"}
            name={"notifications"}
            color={"#384EC7"}
          />
          <NotificationContainer
            text={"Automation"}
            hour={"Permit the app control your lights"}
            name={"calendar-outline"}
            color={"#599BF9"}
          />
          <NotificationContainer
            text={"Profile"}
            hour={"Edit information in your profile, even your password"}
            name={"create-outline"}
            color={"#FFAC3D"}
          />
          <View style={style.logout}>
            <Text
              style={{ textAlign: "center", color: "rgba(75, 97, 221, 0.5)" }}
            >
              Log Out
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  setting: {
    fontWeight: "600",
  },
  logout: {
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(75, 97, 221, 0.5)",
  },
});
