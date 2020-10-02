import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import backgroundImage from '../assets/background.jpg';

function WelcomeScreen(props) {

  return(
    <ImageBackground 
    source={backgroundImage}
    style={styles.background}>
      <View style={styles.loginButton} >
        <Text>Button will be here!</Text>
      </View>
    </ImageBackground>
    
    /* // <ImageBackground */
    //   source={backgroundImage}
    //   style={styles.background} >
    //   <View style={styles.loginButton} >
    //     <Text>Hello There General Kenobi</Text>
    //   </View>
    // </ImageBackground>

    // <View style={styles.background}>
    //   <View style={styles.loginButton} >
    //     <Text>Hello There General Kenobi</Text>
    //   </View>
    // </View>

    // <Image
    // source={require('./../assets/background2.jpg')}
    // style={styles.background} />
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#32CD32",
    height: "100%",
    width: "100%",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  }
  
});

export default WelcomeScreen;