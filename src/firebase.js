import * as firebase from 'firebase';
import 'firebase/firestore';
import keys from './keys';

const firebaseConfig = {
  apiKey: `${keys.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${keys.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${keys.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${keys.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${keys.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${keys.REACT_APP_FIREBASE_SENDER_ID}`,
  appId: `${keys.REACT_APP_FIREBASE_APP_ID}`
}


// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
// }

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;