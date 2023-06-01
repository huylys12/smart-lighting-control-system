import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotificationContainer from "../../components/NotificationContainer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as api from "../../api/api";

export default function NotificationHomeScreen({ navigation }) {
  const [notifies,setNotifies] = useState([]);
  const { refresh,token } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async() => {
      const res = await api.get({url:'api/notifications/all',
                                token: token});
      // if(res) console.log(res);
      setNotifies(res.notifications);
    }
    fetchData();
  },[refresh]);
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{ marginHorizontal: 16 }}>
          <View>
            <Text style={style.title}>New</Text>
            {
              notifies.map((notify) => (
                <NotificationContainer
                  text={notify.title}
                  hour={"5m ago"}
                  name={"alert-circle-outline"}
                  color={"#599BF9"}
                  bgcolor={"#E1E1E1"}
                  key={notify._id}
                />
              ))
            }
            {/* <NotificationContainer
              text={"Brightness of living room is just too low"}
              hour={"5m ago"}
              name={"alert-circle-outline"}
              color={"#599BF9"}
              bgcolor={"#E1E1E1"}
            />
            <NotificationContainer
              text={
                "No one is in the living room. Turn off all lights, please!"
              }
              hour={"15m ago"}
              name={"warning-outline"}
              color={"#FFAC3D"}
              bgcolor={"#E1E1E1"}
            />
          </View>
          <View>
            <Text style={style.title}>Before</Text>
            <NotificationContainer
              text={
                "Someone is in the living room, but the brightness is too low."
              }
              hour={"1h ago"}
              name={"warning-outline"}
              color={"#FFAC3D"}
              bgcolor={"#FFFFFF"}
            />
            <NotificationContainer
              text={"BrightNess of living room is just too high."}
              hour={"1h 29m ago"}
              name={"alert-circle-outline"}
              color={"#599BF9"}
              bgcolor={"#FFFFFF"}
            />
            <NotificationContainer
              text={"Brightness of living room is just too low."}
              hour={"1h 29m ago"}
              name={"alert-circle-outline"}
              color={"#599BF9"}
              bgcolor={"#FFFFFF"}
            /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 16
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
    marginTop: 16,
  },
});
