//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AuthContext from "./context/auth/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(false)
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start">
            {(props) => <StartScreen {...props} num={1} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {(props) => <RegisterScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
