import React, {useContext} from "react";
import { View } from "react-native";
import {Button, Input} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {state:{name, recording, locations}, startRecording ,stopRecording ,changeName} = useContext(LocationContext);
    //const [saveTrack] = useSaveTrack();

    console.log(locations.length);
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
            !recording && locations.length ? <Button title="Save recording"  /> : null
        }
        </Spacer>
        </View>
    );
};

export default TrackForm;