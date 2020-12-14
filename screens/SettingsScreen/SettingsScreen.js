import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthContext from '../../context/auth/AuthContext';

const SettingsScreen = () => {
  const {onSignOut} = useContext(AuthContext)

  return (
    <View style={styles.container}>
    <Text>Hello!! This is SettingsPage</Text>

    <TouchableOpacity onPress={onSignOut} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Log out</Text>
      </TouchableOpacity>
  </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "50%"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default SettingsScreen;