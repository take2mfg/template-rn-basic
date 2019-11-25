import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native-ui-lib';

function Loading() {
  return (
    <View flex center background>
      <ActivityIndicator />
    </View>
  );
}

export default Loading;
