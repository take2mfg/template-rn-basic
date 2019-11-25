import React from 'react';
import { Colors } from 'react-native-ui-lib';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../Dashboard';
import Posts from './Posts';

const Drawer = createDrawerNavigator();

const drawerContentOptions = {
  activeTintColor: Colors.cyan10,
  activeBackgroundColor: Colors.cyan80,
  labelStyle: { marginVertical: 80 },
};

function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContentOptions={drawerContentOptions}
      hideStatusBar
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Posts" component={Posts} />
    </Drawer.Navigator>
  );
}

export default Main;
