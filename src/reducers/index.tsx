import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import viewReducer from "./viewReducer";

const allReducers = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  view: viewReducer,
});

export default allReducers;
