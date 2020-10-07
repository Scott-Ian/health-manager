import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import colors from './../config/colors';

function Home (props) {

  return(
    <View style={styles.home}>
      <View style={styles.disclaimer}>
        <Text>This is the Home Screen!</Text>

        <Text>Use the navigation bar to visit the different sections of the project</Text>

        <Text>Please note that only the medications subsection is currently under construction.All other sections are pending</Text>
      </View>

      <View style={styles.announcementContainer} >
        <View style={styles.announcement}>
          <Text>Next Appointment:</Text>
          <Text>App Info Here!</Text>
        </View>

        <View style={styles.altAnnouncement}>
          <Text>Next Refil:</Text>
          <Text>Albuterol Inhaler: 11/27/2020</Text>
        </View>

        <View style={styles.announcement}>
          <Text>You have not yet submitted a Quality of Life Rating for today!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    alignContent: 'center',
  },
  announcementContainer: {
    alignContent: 'space-between',
    alignItems: 'center', 
  },
  announcement: {
    backgroundColor: colors.primary,
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    width: '75%',
  },
  altAnnouncement: {
    backgroundColor: colors.secondary,
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    width: '75%',
  }
})

export default Home;