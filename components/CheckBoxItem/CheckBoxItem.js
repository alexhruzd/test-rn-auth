import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const CheckBoxItem = ({
  checked,
  iconName,
  title,
  onCheked,
  flexDirection
}) => {
  const [isChecked, setChecked] = useState(Boolean(checked));

  const onPressed = () => {
    if (typeof onCheked === "function") {
      onCheked(!isChecked);
    }
    setChecked(!isChecked);


  };

  return (
    <TouchableOpacity style={[styles.container, {flexDirection: flexDirection}]} onPress={onPressed}>
      {iconName === undefined && (
        <Image
          style={styles.icon}
          source={
            isChecked
              ? require("./icons/default/true-check.png")
              : require("./icons/default/false-check.png")
          }
        />
      )}
      {iconName === "watched" && (
        <Image
          style={styles.icon}
          source={
            isChecked
              ? require("./icons/watched/true-watched.png")
              : require("./icons/watched/false-watched.png")
          }
        />
      )}
      {iconName === "unwatched" && (
        <Image
          style={styles.icon}
          source={
            isChecked
              ? require("./icons/unwatched/true-unwatched.png")
              : require("./icons/unwatched/false-unwatched.png")
          }
        />
      )}

      <Text style={ !isChecked ? styles.title : styles.titleActive}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    color: "#7B7B7B",
    borderBottomWidth: 2,
    borderColor: "transparent",
    paddingBottom: 5

  },
  titleActive: {
    color: "#A000B0",
    borderBottomWidth: 2,
    borderColor: "#A000B0",
    paddingBottom: 5
  }

});

export default CheckBoxItem;
