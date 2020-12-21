import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AccordionListItem = ({ title, children }) => {
  const [isContent, showContent] = useState(false);
  return (
    <View style={styles.accordion}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => showContent(!isContent)}
      >
        <Image style={[styles.icon, isContent && styles.iconOpen]} source={require("./accordion-arrow.png")} />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isContent && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    width: "100%",
    borderBottomWidth: 2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 5,
  },
  icon: {
    marginRight: 20,
  },
  iconOpen: {
    transform: [
      {rotate: "90deg"}
    ]
  },
  content: {
    padding: 10,
  },
});

export default AccordionListItem;
