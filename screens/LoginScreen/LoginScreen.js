import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import AuthContext from "../../context/auth/AuthContext";

const LoginScreen = () => {
  const { control, handleSubmit, errors } = useForm({ mode: "onChange" });
  const { onSignIn, onLoading } = React.useContext(AuthContext);
  const [ErrMess, setErrMess] = useState("");

  const onSubmit = (data) => {
    onLoading(true);
    onSignIn(data).then((mess) => {
      setErrMess(mess);
      onLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label="Enter login or email:"
            errorStyle={{ color: "red" }}
            errorMessage={errors.login?.message}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="login"
        rules={{ required: "Login is required!" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label="Enter password:"
            errorStyle={{ color: "red" }}
            errorMessage={errors.password?.message}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: "Password is required!" }}
        defaultValue=""
      />

      {ErrMess.length !== 0 && (
        <Text style={{ color: "red", marginBottom: 10 }}>{ErrMess}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    width: "90%",
  },
  label: {
    width: "90%",
  },
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

export default LoginScreen;
