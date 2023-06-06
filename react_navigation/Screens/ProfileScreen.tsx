/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, Button} from 'react-native';
import React from 'react';

function ProfileScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Feeds Screen"
        onPress={() => navigation.navigate('Feeds')}
      />
    </View>
  );
}

export default ProfileScreen;
