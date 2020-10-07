import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';

function AppointmentList(props) {

  useFirestoreConnect([
    {collection: 'appointments'}
  ]);

  const auth = props.firebase.auth();
  const currentUserEmail = auth.currentUser.email;

  const appointments = props.firestore.data.appointments

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

  const filteredAppointments = filterObjectToArray(appointments, currentUserEmail);

  function pressNew() {
    const { dispatch } = props;
    const action = a.appointmentCreate();
    dispatch(action);
  }

  return(
    <ScrollView>
      <Text>Appointment List!</Text>

      <View style={styles.buttonCover}>
        <Button onPress={pressNew} title="Add New Appointment" color={colors.secondary} />
      </View>

      {filteredAppointments.map((appointment, index) => {
        return(
          <View style={styles.item} key={index}>
            <Text style={styles.header}>DateTime: {appointment.dateTime}</Text>
            <Text>Physician: {appointment.physician}</Text>
            <Text>Location: {appointment.location}</Text>
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

AppointmentList.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

AppointmentList= connect(mapStateToProps)(AppointmentList);

export default withFirestore(AppointmentList);