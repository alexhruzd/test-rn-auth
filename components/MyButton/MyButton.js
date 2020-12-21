import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const MyButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <View style={styles.appButtonText}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "50%",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default MyButton;
