import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import colors from '../../config/colors';
import * as a from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';

function QoLList(props) {

  useFirestoreConnect([
    {collection: 'qol'}
  ]);

  const auth = props.firebase.auth();
  const currentUserEmail = auth.currentUser.email;

  const ratings = props.firestore.data.qol

  const filterObjectToArray = function(object, currentUserEmail) {
    let result = [];
    
    for(const key in object) {
      if(object[key].userEmail === currentUserEmail) {
        result.push(object[key]);
      }
    }
    return result;
  }

  const filteredratings = filterObjectToArray(ratings, currentUserEmail);

  function pressNew() {
    const { dispatch } = props;
    const action = a.qolCreate();
    dispatch(action);
  }

  return(
    <ScrollView>
      <Text>Quality of Life Ratings List!</Text>

      <View style={styles.buttonCover}>
        <Button onPress={pressNew} title="Add New Daily Rating" color={colors.secondary} />
      </View>

      {filteredratings.map((rating, index) => {
        return(
          <View style={styles.item} key={index}>
            <Text style={styles.header}>Date: {rating.date}</Text>
            <Text>Pain: {rating.pain}</Text>
            <Text>Nausea: {rating.nausea}</Text>
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

MedicationList.propTypes = {
  displayState: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    displayState: state.displayState,
    firestore: state.firestore,
  }
}

QoLList= connect(mapStateToProps)(QoLList);

export default withFirestore(QoLList);