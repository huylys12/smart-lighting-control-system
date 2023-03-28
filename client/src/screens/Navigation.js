import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
// IMPORT ALL STACKS
import HomeStack from "./home/HomeStack";
import ScheduleStack from "./schedule/ScheduleStack";
import StatisticStack from "./statistic/StatisticStack";
import NotificationStack from "./notification/NotificationStack";
import ProfileStack from "./profile/ProfileStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: TabBar,
          tabBarStyle: {
            height: 64,
            paddingBottom: 8,
          },
          tabBarActiveTintColor: "#384EC7",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            height: 80,
          },
          headerTitleStyle: { fontSize: 22, fontWeight: "600" },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Statistic"
          component={StatisticStack}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationStack}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          tabBarButton={() => {}}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }