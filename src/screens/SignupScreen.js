import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>

      <Input lebel="Email" />
      <Spacer />
      <Input lebel="Password" />

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
