import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import colors from '../../config/colors';
import { useSelector } from 'react-redux';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';

function MedicationList(props) {

  useFirestoreConnect([
    {collection: 'medications'}
  ]);

  const auth = props.firebase.auth();
  const currentUserEmail = auth.currentUser.email;

  const medications = useSelector(state => state.firestore.ordered.medications);
    //.filter(medication => medication.userEmail === currentUserEmail);

    console.log(medications);
  function pressNew() {
    const { dispatch } = props;
    const action = a.medicationCreate();
    dispatch(action);
  }

  return(
    <ScrollView>
      <Text>Medication List!</Text>

      <View style={styles.buttonCover}>
        <Button onPress={pressNew} title="Add New Medication" color={colors.secondary} />
      </View>

      {medications.map((medication) => {
        return(
          <View>
            <Text>Medication: {medication.name}</Text>
            <Text>Dosage: {medication.dosage}</Text>
          </View>
        )
      })}


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonCover: {
    backgroundColor: colors.primary,
  },
})

MedicationList.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

MedicationList= connect(mapStateToProps)(MedicationList);

export default withFirestore(MedicationList);