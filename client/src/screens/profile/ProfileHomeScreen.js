import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationContainer from "../../components/NotificationContainer";
import ProfileName from "../../components/ProfileName";
import ProfilePower from "../../components/ProfilePower";
import * as api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function ProfileHomeScreen({ navigation }) {
  const { token } = useContext(AuthContext);

  const handleTabEditProfile = () => {
    return navigation.navigate("Edit Profile");
  };
  const handleLogout = async () => {
    const res = await api.get({ url: "api/accounts/logout", token: token });
    if (res) {
      console.log("Logout: ", res);
      navigation.navigate("Welcome");
    }
  };
  return (
    <View style={style.container}>
      <View>
        <ProfileName name={"Harry Brown"} />
        <ProfilePower poweruse={"219 kwh"} />
      </View>
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
        <TouchableOpacity onPress={handleTabEditProfile}>
          <NotificationContainer
            text={"Profile"}
            hour={"Edit information in your profile, even your password"}
            name={"create-outline"}
            color={"#FFAC3D"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.logout} onPress={handleLogout}>
          <Text
            style={{ textAlign: "center", color: "rgba(75, 97, 221, 0.5)" }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
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
