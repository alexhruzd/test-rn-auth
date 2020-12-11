import { Home, Settings } from "@material-ui/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? <Home style={{ color: "tomato" }} /> : <Home />;
          }
          if (route.name === "Settings") {
            return focused ? (
              <Settings style={{ color: "tomato" }} />
            ) : (
              <Settings />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
      }}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {(props) => <SettingsScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
