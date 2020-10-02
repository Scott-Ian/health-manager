import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {

  return(
    // <ImageBackground 
    // source={require('./../assets/background2.jpg')}
    // style={styles.background}>
    //   <View style={styles.loginButton} >
    // </ImageBackground>
    
    <ImageBackground
      source={require('./../assets/background2.jpg')}
      style={styles.background} >
      <View style={styles.loginButton} >
        <Text>Hello There General Kenobi</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "#32CD32"
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  }
  
});

export default WelcomeScreen;