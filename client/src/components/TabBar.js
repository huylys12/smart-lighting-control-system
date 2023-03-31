import { View } from "react-native";
import { useRoute } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Notification({ focused, color, size }) {
  var iconName = "";
  const route = useRoute();
  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Schedule":
      iconName = focused ? "time" : "time-outline";
      break;
    case "Statistic":
      iconName = focused ? "bar-chart" : "bar-chart-outline";
      break;
    case "Notification":
      iconName = focused ? "notifications" : "notifications-outline";
      break;
    case "Profile":
      iconName = focused ? "person" : "person-outline";
      break;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={iconName} color={color} size={size} />
    </View>
  );
}
