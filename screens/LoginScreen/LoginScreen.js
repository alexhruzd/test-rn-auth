import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  const { control, handleSubmit, errors } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);

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
        label="Enter password"
        name="password"
        defaultValue=""
        rules={{ required: "Password is required!" }}
        error={errors.password && true}
        helperText={errors.password?.message}
        type="password"
      />

      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        Login
      </Button>
    </View>
  );
};

const stylesInput = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
});

export default LoginScreen;
