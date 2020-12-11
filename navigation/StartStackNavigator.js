import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import StartScreen from "../screens/StartScreen/StartScreen";

const Stack = createStackNavigator();

const StartStackNavigator = ({isOut}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start">
        {(props) => <StartScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Login" oprtions={{animationTypeForReplace: isOut ? 'pop' : 'push',}}>
        {(props) => <LoginScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {(props) => <RegisterScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StartStackNavigator;
