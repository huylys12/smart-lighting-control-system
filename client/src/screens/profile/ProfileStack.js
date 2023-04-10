import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "./ProfileHomeScreen";
import ProfileEditScreen from "./ProfileEditScreen";
const HistoryStack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="ProfileHome"
        component={ProfileHomeScreen}
      />
      <HistoryStack.Screen
        name="Edit Profile"
        component={ProfileEditScreen}
        options={{headerShown:true}}
      />
    </HistoryStack.Navigator>
  );
}
