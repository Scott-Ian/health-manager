import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import colors from '../../config/colors';
import { useSelector } from 'react-redux';

function MedicationList(props) {

  useFirestoreConnect([
    {collection: 'medications'}
  ]);

  const currentUser = {} // define current user code here
  const medications = useSelector(state => state.firestore.ordered.medications)
    .filter(medication => medication.user === currentUser);

  return(
    <View>
      <Text>Medication List Screen!</Text>


    </View>
  )
}

export default MedicationList;