import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabNavigator from './MainTabNavigator'
import SettingsScreen from "../screens/SettingsScreen";
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
