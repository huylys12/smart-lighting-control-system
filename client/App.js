import * as React from "react";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/screens/Navigation";
import AuthenticationStack from "./src/screens/authentication/AuthenticationStack";

const HistoryStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HistoryStack.Navigator>
        <HistoryStack.Screen
          name="App"
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
      </HistoryStack.Navigator>
    </NavigationContainer>
  );
}
