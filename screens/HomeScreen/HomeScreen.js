import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";


const HomeScreen = ({navigation}) => {

  useEffect(() => {
    navigation.openDrawer();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello!! This is HomePage</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
