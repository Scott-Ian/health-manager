const { FirebaseReducer } = require("react-redux-firebase")

import displayReducer from './display-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import loginReducer from './login-reducer';

const rootReducer = combineReducers({
  displayState: displayReducer,
  firestore: firestoreReducer,
  user: loginReducer,
})

export default rootReducer;