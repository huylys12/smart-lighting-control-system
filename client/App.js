import * as React from "react";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// IMPORT ALL SCREENS NEED NAVIGATION
import HomeHomeScreen from "./src/screens/home/HomeHomeScreen";
import ScheduleHomeScreen from "./src/screens/schedule/ScheduleHomeScreen";
import StatisticHomeScreen from "./src/screens/statistic/StatisticHomeScreen";
import NotificationHomeScreen from "./src/screens/notification/NotificationHomeScreen";
import ProfileHomeScreen from "./src/screens/profile/ProfileHomeScreen";

const Tab = createBottomTabNavigator();

const HistoryStack = createNativeStackNavigator();

function AuthenticationStackScreen() {}

function HomeStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="HomeHome" component={HomeHomeScreen} />
    </HistoryStack.Navigator>
  );
}

function ScheduleStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="ScheduleHome" component={ScheduleHomeScreen} />
    </HistoryStack.Navigator>
  );
}

function StatisticStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="StatisticHome"
        component={StatisticHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}

function NotificationStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="NotificationHome"
        component={NotificationHomeScreen}
      />
    </HistoryStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="ProfileHome" component={ProfileHomeScreen} />
    </HistoryStack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconName = "";
          
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
            <>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name={iconName} color={color} size={size} />
              </View>
            </>
          );
        },
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#384EC7',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: { fontSize: 22, fontWeight: "600" },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Schedule" component={ScheduleStackScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Statistic" component={StatisticStackScreen} options={{ headerShown: true }}/>
      <Tab.Screen name="Notification" component={NotificationStackScreen} options={{ headerShown: true }}/>
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        tabBarButton={() => {}}
      options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HistoryStack.Navigator>
        <HistoryStack.Screen
          name="App"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </HistoryStack.Navigator>
    </NavigationContainer>
  );
}
