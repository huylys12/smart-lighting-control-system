import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import NameCom from "../../components/NameCom";
import PasswordCom from "../../components/PasswordCom";
import React, { useContext, useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useEffect } from "react";
import * as api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
export default function Information({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const { token, reRender } = useContext(AuthContext);
  const handleGoBack = () => {
    navigation.goBack(); // Quay lại trang Profile
  };
  const handleSave = async () => {
    // Cập nhật tên
    if (username) {
      const updateNameRes = await api.patch({
        url: "api/accounts/update",
        token: token,
        data: `name=${username}`,
      });
      // console.log("Name updated:", updateNameRes);
      reRender();
    }
    return navigation.navigate("ProfileHome");
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Edit Profile",
      headerTitleAlign: "center",
      headerRight: () => (
        <TouchableOpacity onPress={() => handleSave}>
          <Text style={{ fontSize: 15, color: "#4B61DD" }}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: "white" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 75,
        }}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            style={{ textAlign: "left" }}
            name={"chevron-back-outline"}
            color={"grey"}
            size={40}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            fontStyle: "normal",
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          {" "}
          Edit Profile
        </Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={{ fontSize: 15, color: "#4B61DD", marginRight: 16 }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.inputBox}>
        <FloatingLabelInput
          label="Full Name"
          keyboardType="ascii-capable"
          value={username}
          onChangeText={(value) => setUsername(value)}
          customLabelStyles={{
            colorFocused: "#717171",
            colorBlurred: "#717171",
          }}
          containerStyles={{
            borderWidth: 1,
            paddingHorizontal: 8,
            backgroundColor: "#ffffff",
            borderColor: "#E1E1E1",
            borderRadius: 8,
            marginBottom: 8,
            height: 60,
          }}
        />
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderColor: "#E1E1E1",
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 8,
    height: 60,
  },
  input: {
    flex: 1,
    fontSize: 17,
    lineHeight: 22,
    color: "#000000",
  },
  showButton: {
    top: 16,
  },

  showButtonText: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#717171",
  },
});
