import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleHomeScreen from "./ScheduleHomeScreen";

const HistoryStack = createNativeStackNavigator();

export default function ScheduleStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="ScheduleHome"
        component={ScheduleHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}
