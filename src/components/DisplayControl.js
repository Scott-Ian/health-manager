import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import * as c from './../actions/ActionTypes';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import WelcomeScreen from './WelcomeScreen';

class DisplayControl extends React.Component {

  constructor(prosp) {
    super(props);
    
  }

  render() {
    let visibleState ="";

    if(this.props.displayState.display === c.WELCOME_SCREEN) {
      visibleState= <WelcomeScreen />
    } else if ()

    return(
      {visibleState}
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