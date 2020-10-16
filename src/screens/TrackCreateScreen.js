import "../_mockLocation";
import React, {useContext} from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation((location) => addLocation(location));

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create Track</Text>
      <Map />
      {err ? <Text>{err}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
