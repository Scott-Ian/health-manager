import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import colors from './../config/colors';
import { StyleSheet, View, Text, Image, Button, TextInput } from 'react-native';

function Navbar (props) {
  const { dispatch } = props;
  
  function pressHome() {
    
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
