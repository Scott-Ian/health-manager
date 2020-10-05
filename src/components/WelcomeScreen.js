import React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button } from 'react-native';
import { welcomeScreen } from '../actions';
import backgroundImage from '../assets/background2.jpg';
import colors from './../config/colors';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

function WelcomeScreen(props) {

  const [formType, setFormType ] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email= event.target.email.value;
  }



  // Sign in display
  if (formType === "Sign In") {
    return (
      <ImageBackground 
      source={backgroundImage}
      style={styles.background} >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/placeholderLogo.png')} style={styles.logo}/>
          <Text>Take Charge of Your Health Journey</Text>
        </View>
        <View style={styles.loginButton} >
          <Text>Button will be here!</Text>
        </View>
        <View style={styles.registerButton} >
          <Text>Button will be here!</Text>
        </View>
      </ImageBackground>
    )
  }

  // Sign up display
  else if (formType === "Sign Up") {
    console.log(formType);
    return (
      <ImageBackground 
      source={backgroundImage}
      style={styles.background} >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/placeholderLogo.png')} style={styles.logo}/>
          <Text>Take Charge of Your Health Journey</Text>
        </View>
        <View style={styles.loginButton} >
          <Text>Test</Text>
        </View>
        <View style={styles.registerButton} >
          <Text>Button will be here!</Text>
        </View>
      </ImageBackground>
    )
  }

  // Default sign-in display
  else {
    return (
      <ImageBackground 
      source={backgroundImage}
      style={styles.background} >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/placeholderLogo.png')} style={styles.logo}/>
          <Text>Take Charge of Your Health Journey</Text>
        </View>

        {/* <Button onPress={props.goHome} title="Home Page" color={colors.primary} /> */}
        <View style={styles.loginButton} >
          <Button onPress={() => setFormType("Sign In")} title="Sign In" color={colors.primary} />
        </View>
        <View style={styles.registerButton} >
          <Button onPress={() => setFormType("Sign Up")} title="Sign Up" color={colors.primary} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
});

welcomeScreen.propTypes = {
  goHome: PropTypes.func,
}

export default WelcomeScreen;