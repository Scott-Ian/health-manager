import React from 'react';
import { View, Text, Image } from 'react-native';
import colors from './../config/colors';

function Home (props) {

  return(
    <View>
      <Text>This is the Home Screen!</Text>

      <Text>Use the navigation bar to visit the different sectiosn of the project</Text>

      <Text>Please note that only the medications subsection is currently under construction.All other sections are pending</Text>
    </View>
  )
}

export default Home;