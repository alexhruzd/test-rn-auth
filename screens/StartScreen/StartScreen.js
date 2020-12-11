import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@material-ui/core";

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        onClick={() => navigation.navigate("Login")}
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px", width: "50%" }}
      >
        Login
      </Button>
      <Button
        onClick={() => navigation.navigate("Register")}
        variant="contained"
        color="primary"
        style={{ width: "50%" }}
      >
        Register
      </Button>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
});

export default StartScreen;
