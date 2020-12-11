import React, { useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContext from "./context/auth/AuthContext";
import AuthReducer from "./context/auth/AuthReducer";
import { restoreToken, signIn, signOut } from "./context/auth/actions";
import StartStackNavigator from "./navigation/StartStackNavigator";
import MainDrawerNavigator from "./navigation/MainDrawerNavigator";


export default function App() {
  const [state, dispatch] = useReducer(AuthReducer, {
    userToken: null,
    isLoading: true,
    isOut: false,
  });
  console.log(state);

  useEffect(() => {
    console.log("effect");
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log("tok ", userToken);
      } catch (error) {
        console.log("Something went wrong", error);
      }

      dispatch(restoreToken(userToken));
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      onSignIn: (user) => {
        let userToken = user.login + user.password;
        dispatch(signIn(userToken));
      },

      onSignOut: () => dispatch(signOut()),
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
          <StartStackNavigator isOut={state.isOut}/>
        ) : (
          <MainDrawerNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
