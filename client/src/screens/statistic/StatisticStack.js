import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatisticHomeScreen from "./StatisticHomeScreen";

const HistoryStack = createNativeStackNavigator();

export default function StatisticStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="StatisticHome"
        component={StatisticHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}
