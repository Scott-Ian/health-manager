import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Button, Platform } from 'react-native';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';

function QoLCreate(props) {

  // Hooks for managing user input
  const [ date, setDate ] = useState(null);
  const [ pain, setPain ] = useState(null);
  const [ nausea, setNausea ] = useState(null);

  const firestore = useFirestore();

  const auth = props.firebase.auth();
  const userEmail = auth.currentUser.email;

  function addQoLToFirestore() {
    firestore.collection('qol').add(
      {
        date,
        pain,
        nausea,
        userEmail,
      }
    );
    const { dispatch } = props;
    const action = a.qolList();
    dispatch(action);
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.screen} >

      <View style={styles.form}>
        <Text style={styles.header}>Add a New Quality of Life Rating!</Text>

        <Text>Date:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setDate(text)}
        />

        <Text>Pain Rating 0-10:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setPain(text)}
        />

        <Text>Nausea Rating 0-10:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setNausea(text)}
        />

        <View style={styles.submitButton}>
          <Button onPress={addQoLToFirestore} title="Submit" color={colors.secondary} />
        </View>

      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {

  },
  form: {
    alignContent:'center'
  },
  header: {
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    paddingBottom: 100
  },
  smallInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1
  },
  submitButton: {
    width: 140,
    height: 45,
    backgroundColor: colors.primary,
  }
})

QoLCreate.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

QoLCreate = connect(mapStateToProps)(QoL);

export default withFirestore(QoLCreate);