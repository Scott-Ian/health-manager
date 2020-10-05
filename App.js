import React from 'react';
import { createStore } from 'redux';
import  rootReducer from './src/reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './src/firebase';
import 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Platform} from 'react-native';
import DisplayControl from './src/components/DisplayControl';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

// This dimension logic should be re-called if orientation is flipped
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider { ... rrfProps} >
          <View style={styles.container}>
            <StatusBar style='dark' />
            <DisplayControl />
          </View>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: windowHeight,
    width: windowWidth,
  },
});

export default App;
