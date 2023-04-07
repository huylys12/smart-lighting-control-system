import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";
import WelcomeScreen from "./WelcomeScreen";
import Navigation from "../Navigation";

const HistoryStack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="Welcome" component={WelcomeScreen} />
      <HistoryStack.Screen name="SignUp" component={SignUpScreen} />
      <HistoryStack.Screen name="LogIn" component={LogInScreen} />
      <HistoryStack.Screen name="Main" component={Navigation} />
    </HistoryStack.Navigator>
  );
}
