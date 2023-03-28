import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "./ProfileHomeScreen";

const HistoryStack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="ProfileHome"
        component={ProfileHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}
