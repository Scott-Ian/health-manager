import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class DisplayControl extends React.Component {

  constructor(prosp) {
    super(props);
    
  }

}


const mapStateToProps = state => {
  return{
    displayState: state.Display
  }
}

DisplayControl = connect(mapStateToProps)(DisplayControl);

export default DisplayControl;