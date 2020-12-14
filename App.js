import React, { useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContext from "./context/auth/AuthContext";
import AuthReducer from "./context/auth/AuthReducer";
import {
  isLoading,
  restoreToken,
  signIn,
  signOut,
} from "./context/auth/actions";
import StartStackNavigator from "./navigation/StartStackNavigator";
import MainDrawerNavigator from "./navigation/MainDrawerNavigator";

export default function App() {
  const [state, dispatch] = useReducer(AuthReducer, {
    userToken: null,
    isLoading: true,
    isOut: true,
  });
  console.log("state", state);

  useEffect(() => {
    console.log("effect");
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log("Something went wrong", error);
      }
      
      dispatch(restoreToken(userToken));
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      onSignIn: async (newUser) => {

        let userIs = await AsyncStorage.getItem(newUser.login);
        console.log(userIs)
        if(userIs === null) {
          return "User not found!"
        }

        let user = JSON.parse(userIs);
        if( user.password !== newUser.password ) {
          return "Password is incorrect!"
        }

        dispatch(signIn(user.login));
      },

      onRegister: async (user) => {
        let userIs = await AsyncStorage.getItem(user.login);
        if(!userIs) {
          await AsyncStorage.setItem(user.login, JSON.stringify(user));
        } else {
          return false;
        }

        console.log(user);

        await AsyncStorage.setItem("userToken", user.login);
        dispatch(signIn(user.login))
      },

      onSignOut: () => dispatch(signOut()),

      onLoading: (load) => dispatch(isLoading(load)),
    }),
    []
  );

  // There should be a Loader screen
  if (state.isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.userToken === null ? (
            <StartStackNavigator />
          ) : (
            <MainDrawerNavigator />
          )}
        </NavigationContainer>
    </AuthContext.Provider>
  );
}
