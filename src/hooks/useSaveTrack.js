import {useContext} from "react";
import {Context as TrackContext} from "../context/TrackContext";
import {Context as LocationContext} from "../context/LocationContext";

export default () => {
    const {createTrack} = useContext(TrackContext);
    const {state: {locations, name}} = useContext(LocationContext);
    //console.log(name, locations.length);
    
    const saveTrack = () => { 
        createTrack(name);
        
    };

    return [saveTrack];
};