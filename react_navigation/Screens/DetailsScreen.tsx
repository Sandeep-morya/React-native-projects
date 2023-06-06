/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, Button} from 'react-native';
import React from 'react';

function DetailsScreen({navigation}: any) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go to Top" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailsScreen;
