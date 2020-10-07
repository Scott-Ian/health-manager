import React from 'react';
import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function MedicationCreate(props) {

  const [ physician, setPhysician ] = useState(null);
  const [ datePrescribed, setDate ] = useState(null);
  const [ dosage, setDosage ] = useState(null);
  const [ quantity, setQuantity ] = useState(null);
  const [ name, setName ] = useState(null);

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
    <KeyboardAvoidingView behavior='padding' style={styles.screen} >

      <View style={styles.form}>
        <Text style={styles.header}>Add a New Medication!</Text>

        
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {

  },
  form: {

  },
  header: {
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
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