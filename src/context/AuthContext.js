//import { AsyncStorage } from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin": //both signin and signup is doing same work, so we have condenced down it
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  //make api request with email and password
  //try signup
  //handle successful by updating state
  //else show error
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    //navigate inside mainflow
    navigate("TrackList");
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Signup",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  // try signin
  //handle successful by updating state
  //else show error
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Signin",
    });
  }
};

const signout = (dispatch) => {
  return () => {
    //somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { itoken: null, errorMessage: "" }
);
