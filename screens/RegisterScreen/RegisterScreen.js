import { TextField, Button } from "@material-ui/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import AuthContext from "../../context/auth/AuthContext";

const RegisterScreen = (props) => {
  const { control, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [failPassword, setFailPassword] = useState(false);
  const { onSignIn } = React.useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.passwordRetry) {
      setFailPassword(true);
    } else {
      setFailPassword(false);
      addUser(data).then(() => {
        onSignIn(data);
      });
    }
  };

  const addUser = async (user) => {
    try {
      await AsyncStorage.setItem("userToken", user.login + user.password);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  return (
    <View style={stylesInput.container}>
      <Controller
        style={{ marginBottom: "10px", width: "90%" }}
        control={control}
        as={TextField}
        label="Enter login or email address"
        name="login"
        defaultValue=""
        rules={{ required: "Login is required!" }}
        error={errors.login && true}
        helperText={errors.login?.message}
      />
      <Controller
        style={{ marginBottom: "10px", width: "90%" }}
        control={control}
        as={TextField}
        label="Enter your name"
        name="name"
        defaultValue=""
        rules={{ required: "Name is required!" }}
        error={errors.name && true}
        helperText={errors.name?.message}
      />
      <Controller
        style={{ marginBottom: "10px", width: "90%" }}
        control={control}
        as={TextField}
        label="Enter password"
        name="password"
        defaultValue=""
        rules={{ required: "Password is required!" }}
        error={errors.password && true}
        helperText={errors.password?.message}
        type="password"
      />
      <Controller
        style={{ marginBottom: "10px", width: "90%" }}
        control={control}
        as={TextField}
        label="Retry password"
        name="passwordRetry"
        defaultValue=""
        rules={{ required: "Password is required!" }}
        error={errors.passwordRetry && true}
        helperText={errors.passwordRetry?.message}
        type="password"
      />

      {failPassword && (
        <Text style={{ color: "red" }}>Retry password is incorrect</Text>
      )}

      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        Register
      </Button>
    </View>
  );
};

const stylesInput = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default RegisterScreen;
