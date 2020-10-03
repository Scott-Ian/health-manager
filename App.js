import React from 'react';
import { createStore } from 'redux';
import  rootReducer from './src/reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform} from 'react-native';
import DisplayControl from './src/components/DisplayControl';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <DisplayControl />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "100vh",
    width: "100vw",
  },
});

export default App;
