import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHomeScreen from "./HomeHomeScreen";

const HistoryStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="HomeHome" component={HomeHomeScreen} />
    </HistoryStack.Navigator>
  );
}