import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import colors from '../../config/colors';
import { useSelector } from 'react-redux';

function MedicationList(props) {

  useFirestoreConnect([
    {collection: 'medications'}
  ]);

  const medications = useSelector(state => state.firestore.ordered.medications);

  return(
    <View>
      <Text>MedicationList Screen!</Text>

      
    </View>
  )
}

export default MedicationList;