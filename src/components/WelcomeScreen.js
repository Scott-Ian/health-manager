import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {

  return(
    // <ImageBackground 
    // source={require('./../assets/background2.jpg')}
    // style={styles.background}>
    //   <View style={styles.loginButton} >
    // </ImageBackground>
    
    <View styles={styles.background}>

      <View style={styles.loginButton} >
        <Text>Hello Jesus</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#32CD32"
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  }
  
});

export default WelcomeScreen;