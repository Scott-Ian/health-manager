import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import * as c from './../actions/ActionTypes';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { View, Text, StyleSheet } from 'react-native';

// Screen imports
import WelcomeScreen from './WelcomeScreen';
import Home from './Home';
import Calendar from './Calendar';
import Navbar from './Navbar';

// Appointment Screens
import AppointmentCreate from './appointment/AppointmentCreate';
import AppointmentDetail from './appointment/AppointmentDetail';
import AppointmentEdit from './appointment/AppointmentEdit';
import AppointmentList from './appointment/AppointmentList';

// Medication Screens
import MedicationCreate from './medication/MedicationCreate';
import MedicationDetail from './medication/MedicationDetail';
import MedicationEdit from './medication/MedicationEdit';
import MedicationList from './medication/MedicationList';

// QoL Screens
import QoLCreate from './qol/QoLCreate';
import QoLDetail from './qol/QoLDetail';
import QoLEdit from './qol/QoLEdit';
import QoLList from './qol/QoLList';


class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }

  goHome = () => {
    const { dispatch } = this.props;
    const action = a.homeScreen();
    dispatch(action);
  }

  render() {
    const auth = this.props.firebase.auth();
    let visibleState;
    if(!isLoaded(auth)) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    if((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <View>
          <WelcomeScreen />
        </View>
      )
    }

    if((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.props.displayState.display === c.CALENDAR_SCREEN) {
        visibleState = <Calendar />
      } else if (this.props.displayState.display === c.MEDICATION_LIST) {
        visibleState = <MedicationList />
      } else if (this.props.displayState.display === c.MEDICATION_DETAIL) {
        visibleState = <MedicationDetail />
      } else if (this.props.displayState.display === c.MEDICATION_EDIT) {
        visibleState = <MedicationEdit />
      } else if (this.props.displayState.display === c.MEDICATION_CREATE) {
        visibleState = <MedicationCreate />
      } else if (this.props.displayState.display === c.APPOINTMENT_LIST) {
        visibleState = <AppointmentList />
      } else if (this.props.displayState.display === c.APPOINTMENT_DETAIL) {
        visibleState = <AppointmentDetail />
      } else if (this.props.displayState.display === c.APPOINTMENT_EDIT) {
        visibleState = <AppointmentEdit />
      } else if (this.props.displayState.display === c.APPOINTMENT_CREATE) {
        visibleState = <AppointmentCreate />
      } else if (this.props.displayState.display === c.QOL_LIST) {
        visibleState = <QoLList />
      } else if (this.props.displayState.display === c.QOL_DETAIL) {
        visibleState = <QoLDetail />
      } else if (this.props.displayState.display === c.QOL_CREATE) {
        visibleState = <QoLCreate />
      } else if (this.props.displayState.display === c.QOL_EDIT) {
        visibleState = <QoLEdit />
      } else {
        visibleState = <Home />
      }
    }

    return(
      <View style={styles.displayControl}>
        {visibleState}
        <Navbar style={styles.navbar} />
      </View>
    )
    }
}

const styles = StyleSheet.create({
  navbar: {
    height: 40,
    position: "absolute",
  },
  displayControl: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
})

DisplayControl.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
  }
}

DisplayControl = connect(mapStateToProps)(DisplayControl);

export default withFirestore(DisplayControl);