import "../_mockLocation";
import React, {useEffect,useState,useContext} from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext"

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
      let {status} = await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10 
      }, (location) => {
        //console.log(location);
        addLocation(location);
      })
      if(status !== "granted") {
      setErr("Please enable location services");
      console.log(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, [])

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
