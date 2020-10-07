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

  const medications = props.firestore.data.medications
  // const medications = useSelector(state => state.firestore.ordered.medications);
    //.filter(medication => medication.userEmail === currentUserEmail);
  
  console.log("Medications:")
  console.log(medications)

  const filterObjectToArray = function(object, currentUserEmail) {
    let result = [];
    
    for(const key in object) {
      console.log("Object[Key]")
      console.log(object[key]);
      if(object[key].userEmail === currentUserEmail) {
        result.push(object[key]);
      }
    }
    return result;
  }

  const filteredMedications = filterObjectToArray(medications, currentUserEmail);
    console.log("Filtered Medications:")
    console.log(filteredMedications);
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

      {filteredMedications.map((medication, index) => {
        return(
          <View style={styles.item} key={index}>
            <Text style={styles.header}>Medication: {medication.name}</Text>
            <Text>Dosage: {medication.dosage}</Text>
            <Text></Text>
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
  header: {
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  item: {
    alignContent: 'center',
    borderBottomWidth: 4,
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