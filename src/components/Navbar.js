import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import colors from './../config/colors';
import { StyleSheet, View, Text, Button, } from 'react-native';
import * as a from '../actions/index';
import { connect } from 'react-redux';

function Navbar (props) {
  const { dispatch } = props;
  
  function pressHome() {
    const action = a.homeScreen();
    dispatch(action);
  }

  function pressMedication() {
    const action = a.medicationList();
    dispatch(action);
  }

  function pressAppointment() {
    const action = a.appointmentList();
    dispatch(action);
  }

  function pressQol() {
    const action = a.qolList();
    dispatch(action);
  }

  return(
    <View style={styles.navbar}>
        <View style={styles.buttonCover}>
          <Button onPress={() => setFormType("Sign Up")} title="Sign Up" color={colors.primary} />
        </View>
        <View style={styles.buttonCover}>
          <Button onPress={() => setFormType("Sign Up")} title="Sign Up" color={colors.primary} />
        </View>
        <View style={styles.buttonCover}>
          <Button onPress={() => setFormType("Sign Up")} title="Sign Up" color={colors.primary} />
        </View>
    </View>
  )

}


const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: "space-around",
    height: "10%",
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.navbar,
  },
  buttonCover: {

  }

});


Navbar.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
  }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;
