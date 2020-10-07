import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Button } from 'react-native';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function MedicationCreate(props) {

  // Hooks for managing user input
  const [ physician, setPhysician ] = useState(null);
  const [ datePrescribed, setDatePrescribed ] = useState(null);
  const [ dosage, setDosage ] = useState(null);
  const [ quantity, setQuantity ] = useState(null);
  const [ name, setName ] = useState(null);

  const firestore = useFirestore();

  function addMedicationToFirestore() {
    firestore.collection('medications').add(
      {
        physician,
        datePrescribed,
        dosage,
        quantity,
        name,
      }
    );

    const { dispatch } = props;
    const action = a.medicationList();
    dispatch(action);
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.screen} >

      <View style={styles.form}>
        <Text style={styles.header}>Add a New Medication!</Text>

        <Text>Prescribing Physician:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setPhysician(text)}
          textContentType = "name"
        />

        <Text>Date Prescribed:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setDatePrescribed(text)}
        />

        <Text>Dosage: e.g., "5mg, 1/day"</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setDosage(text)}
        />

        <Text>Quantity: e.g., "50"</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setQuantity(text)}
        />

        <Text>Drug Name:</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText = {text => setName(text)}
        />

        <View style={styles.submitButton}>
          <Button onPress={addMedicationToFirestore} title="Submit" color={colors.secondary} />
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

MedicationCreate.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

MedicationCreate= connect(mapStateToProps)(MedicationCreate);

export default MedicationCreate;