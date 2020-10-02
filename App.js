import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform} from 'react-native';
import WelcomeScreen from './src/components/WelcomeScreen';

function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
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
