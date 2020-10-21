import React, {useContext} from "react";
import { View } from "react-native";
import {Button, Input} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";

const TrackForm = () => {
    const {state:{name, recording, location}, startRecording ,stopRecording ,changeName} = useContext(LocationContext);

    //console.log(location.length);
    return (
        <View>
        <Spacer>
            <Input value={name} onChange={changeName} placeholder="Enter Track Name" />
        </Spacer>
        <Spacer>
        {recording 
            ? <Button title="Stop" onPress={stopRecording} />
            : <Button title="Start Recording" onPress={startRecording} />
        }
        </Spacer>
        <Spacer>
        {
            !recording && location.length ? <Button title="Save recording"/> : null
        }
        </Spacer>
        </View>
    );
};

export default TrackForm;