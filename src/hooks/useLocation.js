import { useState, useEffect} from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";

export default (callback) => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        let {status} = await requestPermissionsAsync();
        await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10 
        },
        callback 
        );
        if(status !== "granted") {
        setErr("Please enable location services");
        console.log(err);
      }
    };

    useEffect(() => {
        startWatching();
      }, []);
      
      return [err];
};