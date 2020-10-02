import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {

  return(
    <Image 
    source={require("./../assets/background2.jpg")}
    style={styles.background} />
    //   {/* <View style={styles.loginButton}>
    //     <Text>Hello</Text>

    //   </View> */}
    // // </Image>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  }
  
})

export default WelcomeScreen;