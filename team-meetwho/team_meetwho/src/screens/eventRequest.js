import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';

import { Text } from 'react-native-elements';
const eventRequest = ({navigation}) => {

  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Text style={styles.titleText}> EVENT REQUEST</Text>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default eventRequest;
