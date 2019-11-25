import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './Dashboard';
import Posts from './Posts';

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" hideStatusBar>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Posts" component={Posts} />
    </Drawer.Navigator>
  );
}

export default Main;
