import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Page({ title, navigation }) {
  return (
    <View flex center background-purple>
      <Text text50 white>{title}</Text>
      <Button
        bordered
        strong
        white
        marginT-30
        label="Open Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      hideStatusBar
    >
      <Drawer.Screen
        name="Feed"
        component={props => <Page title="Feed" {...props} />}
      />
      <Drawer.Screen
        name="Article"
        component={props => <Page title="Article" {...props} />}
      />
    </Drawer.Navigator>
  );
}

export default Main;
