import authReducer from './authReducer';
import projectReducer from './projectReducer';
import documentReducer from './documentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  gon: documentReducer,
});

export default rootReducer;
