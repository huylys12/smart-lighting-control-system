import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHomeScreen from "./HomeHomeScreen";
import HomeLightScreen from "./HomeLightScreen";
import HomeAddRoomScreen from "./HomeAddRoomScreen";
import HomeAddLightScreen from './HomeAddLightScreen';

const HistoryStack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="HomeRoom" component={HomeRoomScreen} options={{ headerShown: true }}/>
      <HistoryStack.Screen name="HomeLight" component={HomeLightScreen} options={{ headerShown: true, headerBackTitle: "Back" }}/>
      <HistoryStack.Screen name="HomeAddRoom" component={HomeAddRoomScreen} options={{ headerShown: true, headerBackTitle:"Back" }}/>
      <HistoryStack.Screen name="HomeAddLight" component={HomeAddLightScreen} options={{ headerShown: true, headerBackTitle:"Back" }}/>
    </HistoryStack.Navigator>
  );
}
