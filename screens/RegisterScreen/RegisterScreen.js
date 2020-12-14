import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import AuthContext from "../../context/auth/AuthContext";

const RegisterScreen = () => {
  const { control, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [failPassword, setFailPassword] = useState(false);
  const [failUser, setFailUser] = useState(false);
  const { onRegister, onLoading } = React.useContext(AuthContext);

  const onSubmit = (data) => {
    if (data.password !== data.passwordRetry) {
      setFailPassword(true);
    } else {

      onRegister(data).then((err) => {
        !err && setFailUser(true)
      });
    }
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
            label="Enter name:"
            errorStyle={{ color: "red" }}
            errorMessage={errors.name?.message}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: "Name is required!" }}
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
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label="Retry password:"
            errorStyle={{ color: "red" }}
            errorMessage={errors.passwordRetry?.message}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="passwordRetry"
        rules={{ required: "Reapeted password is required!" }}
        defaultValue=""
      />

      {failPassword && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          Password is incorrect
        </Text>
      )}
      {failUser && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          This user is required!
        </Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Register</Text>
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
    backgroundColor: "white",
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

export default RegisterScreen;
