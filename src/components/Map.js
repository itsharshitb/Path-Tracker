import React, {useContext} from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, {Polyline, Circle} from "react-native-maps";
import {Context as LocationContext} from "../context/LocationContext";

const Map = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const {state: { currentLocation, locations }} = useContext(LocationContext);
  console.log(locations);

=======
  const {state: { currentLocation }} = useContext(LocationContext);
>>>>>>> parent of 71719a6... added polyline in map.js
=======
  const {state: { currentLocation }} = useContext(LocationContext);
>>>>>>> parent of 71719a6... added polyline in map.js
  if(!currentLocation){
    return <ActivityIndicator size= 'large' style={{marginTop: 200}}/>;
  }

  return (
    <MapView style={styles.map} 
    initialRegion={{
       ...currentLocation.coords,
       latitudeDelta: 0.01,
       longitudeDelta: 0.01
      }}>
      <Circle
      center={currentLocation.coords}
      radius={20}
      strokeColor="rgba(255, 0, 0, 1.0)"
      fillColor="rgba(255, 0, 0, 0.3)"
      />
<<<<<<< HEAD
<<<<<<< HEAD
      <Polyline coordinates={locations.map(loc => loc.coords)} />
=======
>>>>>>> parent of 71719a6... added polyline in map.js
=======
>>>>>>> parent of 71719a6... added polyline in map.js
      </MapView>
    );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
