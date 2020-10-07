import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  //below line start signup function from AuthContext.js file
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Signin instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 100,
  },
});

export default SignupScreen;
