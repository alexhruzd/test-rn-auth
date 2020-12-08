import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const StartScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This StartScreen {props.num}</Text>
            <Button 
                title="Login"
                onPress={()=> props.navigation.navigate("Login")}
            />
            <Button 
                title="Register"
                onPress={()=> props.navigation.navigate("Register")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: "green",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default StartScreen;