import React from 'react';
import { Colors } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Settings from './Settings';

const Stack = createStackNavigator();

const screenOptions = {
  title: '',
  headerTintColor: Colors.white,
  headerStyle: {
    shadowColor: 'transparent',
    backgroundColor: Colors.cyan10,
  },
  cardStyle: { backgroundColor: Colors.cyan10 },
};

function DashboardNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;
