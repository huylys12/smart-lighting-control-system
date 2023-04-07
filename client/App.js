import * as React from "react";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/screens/Navigation";
import AuthenticationStack from "./src/screens/authentication/AuthenticationStack";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

const HistoryStack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <HistoryStack.Navigator>
          <HistoryStack.Screen
            name="App"
            component={AuthenticationStack}
            // component={Navigation}
            options={{ headerShown: false }}
          />
        </HistoryStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
