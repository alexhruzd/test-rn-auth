import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from "react-native";
import AuthContext from '../../context/auth/AuthContext';

const SettingsScreen = () => {

  const {onSignOut} = useContext(AuthContext)

  return (
    <View style={styles.container}>
    <Text>Hello!! This is SettingsPage</Text>
    <Button
        onClick={onSignOut}
        variant="contained"
        color="primary"
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        Sign Out
      </Button>
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
});

export default SettingsScreen;