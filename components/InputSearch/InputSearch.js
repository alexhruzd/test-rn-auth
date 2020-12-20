import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputSearch = ({ placeholder, onSearch, imgSrc }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          onSearch(value);
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default InputSearch;
