import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView style={styles.map} />
    );
};

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default Map;
