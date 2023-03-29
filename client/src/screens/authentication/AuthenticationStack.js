import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";

const HistoryStack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="SignUp" component={SignUpScreen} />
      <HistoryStack.Screen name="LogIn" component={LogInScreen} />
    </HistoryStack.Navigator>
  );
}
