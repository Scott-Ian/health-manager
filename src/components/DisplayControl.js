import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import * as c from './../actions/ActionTypes';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import WelcomeScreen from './WelcomeScreen';
import { View } from 'react-native';

class DisplayControl extends React.Component {

  constructor(prosp) {
    super(props);
    
  }

  render() {
    let visibleState ="";

    if(this.props.displayState.display === c.WELCOME_SCREEN) {
      visibleState= <WelcomeScreen />
    } else if (this.props.displayState.display === c.HOME_SCREEN) {
      visibleState = <Home />
    } else if (this.props.displayState.display === c.CALENDAR_SCREEN) {
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
    }

    return(
      <View>
        {visibleState}
      </View>
    )
  }
}


const mapStateToProps = state => {
  return{
    displayState: state.Display
  }
}

DisplayControl = connect(mapStateToProps)(DisplayControl);

export default DisplayControl;