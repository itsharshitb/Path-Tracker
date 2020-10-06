import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
    return ({email, password}) => {
        //make api request with email and password
        //try signup
        //handle successful by updating state
        //else show error
        try{
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data)
        } catch(err) {
            console.log(err.message)
        }
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        // try signin
        //handle successful by updating state
        //else show error
    }
}

const signout = (dispatch) => {
    return () => {
        //somehow sign out
    }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { isSignedIn: false }
);
