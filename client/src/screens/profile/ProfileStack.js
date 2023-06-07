import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "./ProfileHomeScreen";
import ProfileEditScreen from "./ProfileEditScreen";
import NotificationTOScreen from "./NotificationTOScreen";

const HistoryStack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="ProfileHome"
        component={ProfileHomeScreen}
      />
      <HistoryStack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
      />
      {/* <HistoryStack.Screen
        name="NotificationTO"
        component={NotificationTOScreen}
        options={{headerShown:true}}
      /> */}
    </HistoryStack.Navigator>
  );
}
