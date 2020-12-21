import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const InputSearch = ({ placeholder, onSearch, withIcon }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>

    {withIcon !== undefined && (
        <Image
          style={styles.icon}
          source={require("./search.png")}
        />
      )}

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => {
          typeof onSearch === "function" && onSearch(text);
          setValue(text);
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
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%"
  },
  input: {
    width: "100%",
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  icon: {
    width: 32,
    height: 32,
    marginLeft: 5
  },
});

export default InputSearch;
