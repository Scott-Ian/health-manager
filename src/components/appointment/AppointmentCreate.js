import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Button, Platform } from 'react-native';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';

function AppointmentCreate(props) {

  // Hooks for managing user input
  const [ physician, setPhysician ] = useState(null);
  const [ dateTime, setDateTime ] = useState(null);
  const [ purpose, setPurpose ] = useState(null);
  const [ location, setLocation ] = useState(null);

  const firestore = useFirestore();

  const auth = props.firebase.auth();
  const userEmail = auth.currentUser.email;

  function addAppointmentToFirestore() {
    firestore.collection('appointments').add(
      {
        physician,
        dateTime,
        purpose,
        location,
        userEmail,
      }
    );
    const { dispatch } = props;
    const action = a.appointmentList();
    dispatch(action);
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.screen} >

      <View style={styles.form}>
        <Text style={styles.header}>Add a New Appointment!</Text>

        <Text>Physician:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setPhysician(text)}
          textContentType = "name"
        />

        <Text>Date and Time of Appointment:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setDateTime(text)}
        />

        <Text>Purpose:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setPurpose(text)}
        />

        <Text>Location:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setLocation(text)}
        />

        <View style={styles.submitButton}>
          <Button onPress={addAppointmentToFirestore} title="Submit" color={colors.secondary} />
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

AppointmentCreate.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

AppointmentCreate = connect(mapStateToProps)(AppointmentCreate);

export default withFirestore(AppointmentCreate);