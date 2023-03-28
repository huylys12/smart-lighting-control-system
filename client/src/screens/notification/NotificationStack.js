import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationHomeScreen from "./NotificationHomeScreen";

const HistoryStack = createNativeStackNavigator();

export default function NotificationStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="NotificationHome"
        component={NotificationHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}
